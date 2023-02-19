# 2023-01-脚手架开发yargs和command

## 1. 场景需求
开发脚手架，框架有两个

- [https://www.npmjs.com/package/yargs](https://www.npmjs.com/package/yargs)
- [https://www.npmjs.com/package/commander](https://www.npmjs.com/package/commander)
## 2. yargs
### 2.1 简单示例
> bin/index.js

```nginx
#! /usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const arg = hideBin(process.argv);
yargs(arg).argv
```
> package.json

```nginx
{
  "name": "yargs",
  "version": "1.0.0",
  "bin": {
    "qingfengmy-yargs": "bin/index.js"
  },
  "license": "MIT",
  "dependencies": {
    "yargs": "^17.6.2"
  }
}
```
执行命令
```nginx
zhang@zhangMacBook-Pro yargs % npm link

added 1 package in 638ms
zhang@zhangMacBook-Pro yargs % qingfengmy-yargs --help
选项：
  --help     显示帮助信息                                                 [布尔]
  --version  显示版本号                                                   [布尔]
```
### 2.2 原理
命令行里执行`qingfengmy-yargs`的时候，会去`环境变量`中找，我们电脑已经安装了node，node的环境变量位置
```nginx
zhang@zhangMacBook-Pro yargs % where qingfengmy-yargs
/Users/zhang/.nvm/versions/node/v16.17.0/bin/qingfengmy-yargs
```
而执行`npm link`就是把`软连接`放到`node/bin`目录下
![图片.png](https://cdn.nlark.com/yuque/0/2022/png/247102/1671074007784-196bf0b7-6ed2-4e91-9b25-28086a35d7e7.png#averageHue=%23101010&clientId=u5cd211be-2223-4&from=paste&height=492&id=ufd0c8a17&name=%E5%9B%BE%E7%89%87.png&originHeight=984&originWidth=2410&originalType=binary&ratio=1&rotation=0&showTitle=false&size=343714&status=done&style=none&taskId=u22bc3782-0db5-49ca-be71-ee3d4be9a08&title=&width=1205)那么命令行里执行`qingfengmy-yargs`就是执行`index.js`文件。但是我们一般不是需要`node index.js`这样去执行吗？现在怎么能直接执行`index.js`呢？
index.js改成
```nginx
#! /usr/bin/env node

console.log('sss');
```
然后直接执行`bin/index.js`，发现也是可以直接执行的。
```nginx
zhang@zhangMacBook-Pro yargs % bin/index.js
sss
```
原因就是这行代码
```nginx
#! /usr/bin/env node
```
`#!  `是标注文件可以当做脚本运行的，后面表示用`node`运行，`node在env`环境变量中去找。
### 2.3 复杂示例
```javascript
#! /usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
// 文字顶格
const dedent = require('dedent');
const pkg = require('../package.json');

const arg = hideBin(process.argv);

const cli = yargs(arg);
// 添加参数
const argv = process.argv.slice(2);
const context = {
  qingfengmyVersion: pkg.version,
}

cli.strict()
  // 用法说明
  .usage('这是用法说明：qingfengmy-yargs <command> [options]')
  // 最少参数数量
  .demandCommand(1, '最少输入1个参数')
  // 别名
  .alias('h', "help")
  // 命令行宽度
  .wrap(cli.terminalWidth())
  // 页脚
  .epilogue(dedent`   这是
     页脚
     显示`)
  // 多个选项
  .options({
    debug: {
      type: 'boolean',
      description: '是否开启调试',
      alias: 'd',
    }
  })
  // 单个选项
  .option('log', {
    type: 'boolean',
    description: '是否打开日志',
    alias: 'l'
  })
  // 选项分组
  .group(['debug'], 'dev')
  // 子命令第一种写法
  .command(
    'toUpper [upper]',
    '变大写',
    (yargs) => {
      return yargs
        .positional('upper', {
          describe: '输入的参数',
          default: ''
        })
    },
    (argv) => {
      if (argv.upper) {
        console.log(argv.upper.toUpperCase())
      } else {
        console.log('你没有输入参数')
      }
    })
  // 子命令第二种写法
  .command({
    command: 'toLower [lower]',
    alias: ['tl', 'low'],
    description: '变小写',
    builder: (yargs) => {
      return yargs
        .positional('lower', {
          describe: '输入的参数',
          default: ''
        })
    },
    handler: (argv) => {
      // 这里可以拿到子命令参数和总的参数
      console.log(argv);
      if (argv.lower) {
        console.log(argv.lower.toLowerCase())
      } else {
        console.log('你没有输入参数')
      }
    }
  })
  // 推荐命令
  .recommendCommands()
  // 错误时候的提醒
  .fail((err, msg) => {
    console.log(err);
  })
  .parse(argv, context);

```
## 3. commander
### 3.1 简单示例
```javascript
#! /usr/bin/env node

const commander = require('commander');
const pkg = require('../package.json')
// 单例
// const { program } = commander;
const program = new commander.Command();

program
  .version(pkg.version)
  .parse(process.argv);
```
### 3.2 复杂示例
```javascript
#! /usr/bin/env node

const commander = require('commander');
const pkg = require('../package.json')

const program = new commander.Command();
// command必须写在program.parse前面
const toUpper = program.command('toUpper <upper>');
toUpper
  .description('变大写')
  .option('--log', '是否输出', false)
  .action((upper, toUpper) => {
    if (upper && toUpper.log) {
      console.log(upper.toUpperCase())
    }
  })

program
  .name('kobe')
  .version(pkg.version)
  .usage('用法说明：[option] <command>')
  .option('--debug [debug]', '是否开启调试', false)
  .parse(process.argv);

```
注意带参和不带参的区别
```javascript
zhang@zhangMacBook-Pro commander % qingfengmy-commander toUpper --log a
A
```
### 3.3 其他高级用法
#### 3.3.1 命令的子命令
```javascript

const service = program.command('service');
service
  .command('start [port]')
  .description('启动服务器')
  .action((port) => {
    console.log('service start' + port)
  })
service
  .command('stop [port]')
  .description('停止服务器')
  .action((port) => {
    console.log('service stop' + port)
  })
```
```javascript
zhang@zhangMacBook-Pro commander % qingfengmy-commander service start 2222
service start 2222
zhang@zhangMacBook-Pro commander % qingfengmy-commander service stop 2222
service stop 2222
```
#### 3.3.2 参数说明
```javascript
service.argument('<cmd> [options]')
  .description('参数说明', {
    start: '启动',
    'stop': '停止'
  })
```
```javascript
zhang@zhangMacBook-Pro commander % qingfengmy-commander service  -h
Usage: kobe service [options] [command] <cmd> [options>

参数说明

Options:
  -h, --help      display help for command

Commands:
  start [port]    启动服务器
  stop [port]     停止服务器
  help [command]  display help for command
zhang@zhangMacBook-Pro commander %
```
#### 3.3.3 和别的命令交互
```javascript
const init = program
  .command('init [name]', '初始化')
  .action((name) => {
    console.log('name', name);
  })
```
command多了第二个参数，导致执行`qingfengmy-command init aaa`时，变成了`kobe-init aaa`
```javascript
zhang@zhangMacBook-Pro commander % qingfengmy-commander init aaa
/Users/zhang/demos/demo-git/commander/node_modules/commander/lib/command.js:1030
        throw new Error(executableMissing);
        ^

Error: 'kobe-init' does not exist
```
#### 3.3.4 拦截所有的未定义命令
```javascript
program.on('command:*', (obj) => {
  console.log('未知命令', obj);
})
```
## 4. 命令行交互实现
[https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)
[https://juejin.cn/post/6981736393458319397](https://juejin.cn/post/6981736393458319397)
> 需要注意的是v9以上只支持es module，不支持common，我们这里选择v8版本

```javascript
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'project',
      message: '项目名称',
      default: 'copyLeft',
    },
    {
      type: 'list',
      name: 'type',
      message: '项目类型',
      default: 'vue',
      choices: [
        { name: 'vue', value: 'vue' },
        { name: 'react', value: 'react' },
        { name: 'jq', value: 'jq' },
      ]
    }
  ])
  .then((answers) => {
    console.log('答案: ', answers)
  })
  .catch((error) => {
    console.log(`错误: ${error}`)
  });
```
## 5. inquirer和yargs结合使用
```javascript
const inquirer = require('inquirer');
const { hideBin } = require('yargs/helpers');
const yargs = require('yargs/yargs');

const options = {
  name: {
    // inquirer
    message: 'What is your name?',
    name: 'name',
    // yargs
    demandOption: true,
    describe: 'Your name',
    // shared
    type: 'string',
  },
};

(async () => {
  const answers = await inquirer.prompt(Object.values(options));

  Object.entries(answers).forEach(([key, value]) => {
    value && process.argv.push(`--${key}`, value);
  });

  const argv = yargs(hideBin(process.argv)).options(options).parseSync();

  console.log(`Hello, ${argv.name}!`);
})();
```
## 5. 命令行其他实现

- ora： loading
- chalk: 文字加颜色
