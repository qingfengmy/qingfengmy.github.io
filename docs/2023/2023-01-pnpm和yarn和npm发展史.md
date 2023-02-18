# 2023-01-pnpm和yarn和npm发展史

## 1. 官方文档（有中文）
[https://pnpm.io/zh/installation](https://pnpm.io/zh/installation)
pnpm是perforence npm，意为更专业的npm.

安装
```jsx
npm install pnpm -g
```
## 2. node-modules的目录结构发展史
### 2.1 npm1/npm2的嵌套式
```jsx
node_modules 
└─ 依赖A 
   ├─ index.js 
   ├─ package.json 
   └─ node_modules 
       └─ 依赖B 
       ├─ index.js 
       └─ package.json
 └─ 依赖C 
   ├─ index.js 
   ├─ package.json 
   └─ node_modules 
       └─ 依赖B 
       ├─ index.js 
       └─ package.json
```
导致的问题：

- 重复安装
- 嵌套太深
### 2.2 npm3和yarn的扁平式
```jsx
node_modules 
└─ 依赖A  
    ├─ index.js 
    ├─ package.json 
    └─ node_modules 
└─ 依赖C   
    ├─ index.js 
    ├─ package.json 
    └─ node_modules 
└─ 依赖B 
    ├─ index.js 
    ├─ package.json 
    └─ node_modules 
```
导致的问题：

- 依赖结构的不确定性，比如一个依赖B的1.0，一个依赖B的2.0，会导致B的一个版本平铺，一个嵌套。
- 扁平算法复杂，而且耗时
- 非法访问问题，比如你用到了A包，A依赖B包，会导致你项目可以直接使用B包。
### 2.3 pnpm的软连接式
我们先执行以下命令
```jsx
pnpm init
pnpm install express
```
然后你就会发现，express直接出现在了node_modules下面，他的依赖并没有和他处于同一目录下，而他本身目录下也不具备node_modules。像这样↓
![](https://cdn.nlark.com/yuque/0/2022/webp/247102/1658218178659-3f5e1a82-5011-4b21-9cfd-f0625f8f3259.webp#clientId=u099fee7c-bf99-4&from=paste&id=u7e82eae3&originHeight=491&originWidth=515&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u65b118a0-6057-48f1-ab46-f903a7cea37&title=)
为什么会这样？
因为node_modules下面的express仅仅只是一个软连接，pnpm直接抛弃了npm3/yarn原本在项目级别的扁平化结构。项目级别的node_modules下用软链接([什么是软连接？_百度知道 (baidu.com)](https://link.juejin.cn?target=https%3A%2F%2Fzhidao.baidu.com%2Fquestion%2F1546528787657412147.html))代替。
那express的依赖又去了哪里？
![](https://cdn.nlark.com/yuque/0/2022/webp/247102/1658218178368-76513138-9f68-4b7b-9ff2-87fbb8e450a7.webp#clientId=u099fee7c-bf99-4&from=paste&id=u3c3b9cda&originHeight=976&originWidth=507&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue5708607-dea0-48c3-80b0-e3c2a156cf4&title=)
最后我们在.pnpm/express@version/node_modules/ 下面找到了express的依赖。

> **使用pnpm下载的所有依赖都会以.pnpm/依赖名@版本号/node_modules/这种形式被存储。**


乍一看，好像又从扁平化管理回到嵌套结构了。性能不是倒退了吗？
**不是的**。

一开始从npm1和npm2的嵌套结构变成扁平化结构是为了解决

- 1.包被重复安装
- 2.依赖示例无法共享
- 3.依赖层级太深。

这三个问题。而.pnpm/依赖名@版本号/node_modules/下面的依赖也全部都是软连接。这些软连接指向存储在store中的文件。(store是pnpm的文件公共存储空间，在后面会有介绍)
![](https://cdn.nlark.com/yuque/0/2022/webp/247102/1658218178384-0dd65abf-bc4d-4dc2-a87a-646b366d7ce0.webp#clientId=u099fee7c-bf99-4&from=paste&id=u678f52b1&originHeight=860&originWidth=552&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u39a9c012-ab8e-4a8e-9229-6406678759e&title=)
发现这种设计的巧妙之处了吗。
**因为.pnpm/依赖名@版本号/node_modules/下面都是软连接，他们指向同一块存储空间。所以也就不存了包会重复安装和依赖实例无法共享的问题。**
**而，express所有的依赖都会在.pnpm/依赖名@版本号/node_modules/这个目录下被扁平化处理，同样解决了依赖结构太深的问题。**

还有将包本身和依赖放到同一目录下，这样，利用require的特性也能够找到所有的依赖包。再将包本身的软连接放到外层的node_modules中。这样，node_modules中的包在结构上就几乎和package.json中的内容保持一致。为什么说几乎一致而不是完全一致？因为有些包有变量提升，会被提升到外层node_modules中。但是大体上还是一样的。
**到这里，pnpm就又解决了npm3/yarn当时没有解决的依赖结构的不确定性。**

关于npm3/yarn未解决的非法访问问题
而得益于与pnpm的这种包管理方式，我们就会发现，呦呵，非法访问问题也解决了。怎么解决的呢？ 我画了张图↓
![](https://cdn.nlark.com/yuque/0/2022/webp/247102/1658218178929-6b0b8d1b-06bf-4662-8951-4d95f2ef83d5.webp#clientId=u099fee7c-bf99-4&from=paste&id=u7826212a&originHeight=721&originWidth=924&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua08251c5-dd42-4a35-8759-a274c72437d&title=)
当我们再项目中引用的时候，他会去node_modules中去寻找。由上图可知，**只会在node_modules下面的第一层去寻找！！！** 而pnpm的机制会让node_moduels下只有一级依赖包的软链接(也就是说如果你下载一个express,那么项目级别的node_modules下就只有express的软连接而没有express的依赖包的软链接)。所以如果你在自己的项目中直接去引用二级依赖包的话，会报错，直接找不到 **（如上图）** 。
## 3. pnpm中的概念
### 3.1 store
pnpm资源在磁盘上的存储位置。
pnpm 使用名为 .pnpm-store的 [store dir](https://link.juejin.cn?target=https%3A%2F%2Fpnpm.io%2Fzh%2Fnpmrc%23store-dir)，Mac/linux中默认会设置到{home dir}>/.pnpm-store/v3；windows下会设置到当前盘的根目录下，比如C（C/.pnpm-store/v3）、D盘（D/.pnpm-store/v3）。
### 3.2 PeerDependencies
想必前端同学对npm的devDependencies和dependencies都比较熟悉，但是对peerDependencies可能就有点陌生，尤其是没有写过npm包插件的同学，比如之前使用grunt自动化工具的相关插件（如grunt-contrib-jasmine等）或者目前基于某个框架的ui组件库等等，这些都是需要对peerDependencies有一定了解的。下面我们就来说说peerDependencies。
#### 3.2.1 npm2中dependencies与peerDependencies区别
假设我们当前的项目是MyProject，项目中有一些依赖，比方其中有一个依赖包**PackageA**，该包的**package.json**文件指定了对**PackageB**的依赖：
```jsx
{
    "dependencies": {
        "PackageB": "1.0.0"
    }
}
```
如果我们在我们的MyProject项目中执行npm install PackageA, 我们会发现我们项目的目录结构会是如下形式：
```jsx
MyProject
|- node_modules
   |- PackageA
      |- node_modules
         |- PackageB
```
那么在我们的项目中，我们能通过下面语句引入"PackageA"：
```jsx
var packageA = require('PackageA')
```
但是，如果你想在项目中直接引用PackageB:
```jsx
var packageA = require('PackageA')
var packageB = require('PackageB')
```
这是不行的，即使PackageB被安装过；因为Node只会在“MyProject/node_modules”目录下查找PackageB，它不会在进入PackageA模块下的node_modules下查找。
所以，为了解决这个问题，在MyProject项目package.json中我们必须直接声明对PackageB的依赖并安装。
但是，有时我们不用在当前项目中声明对PackageB的依赖就可以直接引用，尤其是，PackageA是一个类似于**grunt**的插件，例如grunt-contrib-jshint。
为什么在项目中不用声明就可以直接使用呢？这就不得不说说peerDependencies的作用了。
#### 3.2.2 peerDependencies的引入
为了解决这种问题：
> 如果你安装我，那么你最好也安装X,Y和Z. 

于是peerDependencies就被引入了。例如上面PackageA的**package.json**文件如果是下面这样：
```jsx
{
    "peerDependencies": {
        "PackageB": "1.0.0"
    }
}
```
那么，它会告诉npm：如果某个package把我列为依赖的话，那么那个package也必需应该有对PackageB的依赖。
也就是说，如果你npm install PackageA，你将会得到下面的如下的目录结构：
```jsx
MyProject
|- node_modules
   |- PackageA
   |- PackageB
```
你可能注意到：
> 在npm2中，即使当前项目MyProject中没有直接依赖PackageB，该PackageB包依然会安装到当前项目的node_modules文件夹中。

下面的代码现在可以正常工作了，因为两个包在"MyProject/node_modules"中被安装了：
```jsx
var packageA = require('PackageA')
var packageB = require('PackageB')
```
总结一句话，peerDependencies的具体作用：
> peerDependencies的目的是提示宿主环境去安装满足插件peerDependencies所指定依赖的包，然后在插件import或者require所依赖的包的时候，永远都是引用宿主环境统一安装的npm包，最终解决插件与所依赖包不一致的问题。

举个例子，就拿目前基于react的ui组件库**ant-design@3.x**来说，因该ui组件库只是提供一套react组件库，它要求宿主环境需要安装指定的react版本。具体可以看它[package.json](https://github.com/ant-design/ant-design/blob/master/package.json#L37)中的配置：
```jsx
  "peerDependencies": {
    "react": ">=16.0.0",
    "react-dom": ">=16.0.0"
  }
```
它要求宿主环境安装react@>=16.0.0和react-dom@>=16.0.0的版本，而在每个antd组件的定义文件顶部：
```jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
```
组件中引入的react和react-dom包其实都是宿主环境提供的依赖包。
#### 3.2.3 npm2和npm3中peerDependencies的区别
正如上一节谈论的，在npm2中，PackageA包中peerDependencies所指定的依赖会随着npm install PackageA一起被强制安装，所以不需要在宿主环境的package.json文件中指定对PackageA中peerDependencies内容的依赖。
但是在npm3中，peerDependencies 的表现与npm2不同：
> npm3中不会再要求peerDependencies所指定的依赖包被强制安装，相反npm3会在安装结束后检查本次安装是否正确，如果不正确会给用户打印警告提示。

就拿上面的例子来说，如果我们npm install PackageA安装PackageA时，你会得到一个警告提示说：
> PackageB是一个需要的依赖，但是没有被安装。 

这时，你需要手动的在MyProject项目的package.json文件指定PackageB的依赖。
另外，在npm3的项目中，可能存在一个问题就是你所依赖的一个package包更新了它peerDependencies的版本，那么你可能也需要在项目的package.json文件中手动更新到正确的版本。否则会出现类似下图所示的警告信息：
![图片.png](https://cdn.nlark.com/yuque/0/2022/png/247102/1658221543220-083c5684-33ca-4122-b72d-8e77f2f10ae7.png#clientId=u099fee7c-bf99-4&from=paste&height=178&id=u1870a6fc&name=%E5%9B%BE%E7%89%87.png&originHeight=159&originWidth=317&originalType=binary&ratio=1&rotation=0&showTitle=false&size=109147&status=done&style=none&taskId=u2f42e12c-1282-4a72-9cdf-9eb7c619cbf&title=&width=353.98333333333335)
#### 3.2.4 pnpm中的peerDependencies
pnpm 的最佳特征之一是，在一个项目中，`package`的一个特定版本将始终只有一组依赖项。 这个规则有一个例外 -那就是具有 [peer dependencies ](https://docs.npmjs.com/files/package.json#peerdependencies)的`package`。
通常，如果一个package没有 peer 依赖项（peer dependencies），它会被硬链接到其依赖项的软连接（symlinks）旁的 node_modules，就像这样：
![图片.png](https://cdn.nlark.com/yuque/0/2022/png/247102/1658221646747-b271947e-2048-4c49-90aa-079aa52c35a1.png#clientId=u099fee7c-bf99-4&from=paste&height=221&id=uf188d214&name=%E5%9B%BE%E7%89%87.png&originHeight=198&originWidth=554&originalType=binary&ratio=1&rotation=0&showTitle=false&size=69328&status=done&style=none&taskId=u25520066-33e4-42a9-b838-49cd867dd81&title=&width=618.6333333333333)
如果 foo 有 peer 依赖（peer dependencies），那么它可能就会有多组依赖项，所以我们为不同的 peer 依赖项创建不同的解析：
![图片.png](https://cdn.nlark.com/yuque/0/2022/png/247102/1658221665587-01768cec-dcbd-452b-b535-332ae9f01cd8.png#clientId=u099fee7c-bf99-4&from=paste&height=495&id=u99581c34&name=%E5%9B%BE%E7%89%87.png&originHeight=443&originWidth=666&originalType=binary&ratio=1&rotation=0&showTitle=false&size=199088&status=done&style=none&taskId=u85d58a27-4cd6-42c2-ad4b-440dd846b49&title=&width=743.6999999999999)
pnpm创建 foo@1.0.0_bar@1.0.0+baz@1.0.0 或foo@1.0.0_bar@1.0.0+baz@1.1.0内到foo的软链接。 因此，Node.js 模块解析器将找到正确的 peers。
如果需要解决peerDep引入的多实例问题，可以通过 [.pnpmfile.cjs](https://link.juejin.cn?target=https%3A%2F%2Fpnpm.io%2Fzh%2Fpnpmfile)文件更改依赖项的依赖关系。
## 4. pnpm的命令
### 4.1 manage depencies 管理依赖
#### 4.1.1 pnpm add
add命令是老朋友了，跟yarn add类似，安装package以及依赖的package，默认是安装到dependencies中。注意的是在workspace中，如果想要安装在root workspace中需要添加-w或者--ignore-workspace-root-check，安装到packages中需要使用--filter，否则会安装失败

5种安装姿势：

- **npm**（默认）： workspace中 会先确认改包是否被引用，是的话根据使用版本来安装； 非workspace中，默认会从 npm registry安装最新的package。例如：pnpm add express@nightly(tag)、pnpm add express@1.0.0（version）、pnpm add express@2 react@">=0.1.0 <0.2.0"（semantic versioning）。
- **workspace**： workspace安装依赖时, 会从已配置的源处进行安装，当然取决于是否设置了 [link-workspace-packages](https://link.juejin.cn?target=https%3A%2F%2Fpnpm.io%2Fzh%2Fworkspaces%23link-workspace-packages),以及是否使用了 [workspace: range protocol](https://link.juejin.cn?target=https%3A%2F%2Fpnpm.io%2Fzh%2Fworkspaces%23workspace-ranges-workspace)。
- **local file system**：本地安装有两种安装方式，源文件和本地目录。
- **reomote tarball**：远端安装必须钥匙一个可访问的**URL**。
- **git repository**：git安装通过git clone从git 作者处安装。

常用的参数选项

- --save-prod, -P：安装到**dependencies**
- --save-dev, -D：安装到**devDependencies**
- --save-optional, -O：安装到**optionalDependencies**
- --save-peer：安装到**peerDependencies**和**devDependencies**中
- --global：安装全局依赖。
- --workspace：仅添加在 workspace 找到的依赖项。
#### 4.1.2 pnpm remove
别名: **rm, uninstall, un**
从 node_modules 和项目的 package.json 中移除包。参数跟add类似，不展开说了
#### 4.1.3 pnpm install
> 别名: **i**

pnpm install 用于安装项目所有依赖。在CI环境中, 如果存在需要更新的 lockfile 会安装失败，所以每次版本更新后，本地一定要install后再提交，否则会导致版本发布失败。
这里讲一下--fix-lockfile和--shamefully-hoist。

- --fix-lockfile 参数自动修复损坏的 lock 文件入口，首次安装时候特别有用，如果遇到某个包找不到，可能是幻影依赖的问题，需要手动添加依赖或者排查原因。
- --shamefully-hoist创建一个扁平node_modules 目录结构, 类似于npm 或 yarn。 这是**非常不推荐**的，但是确实某些场景下可以解决迁移后无法使用额问题
#### 4.1.4 pnpm import
import命令支持从其它格式的lock文件生成pnpm-lock.yaml文件，目前支持三种格式源文件

- package-lock.json
- npm-shrinkwrap.json
- yarn.lock (v6.14.0 起)

个人认为这个命令跟lerna import搭配起来使用更好，lerna import导入git提交历史 （[了解更多](https://juejin.cn/post/7043998041786810398)），一个负责生成pnpm-lock.yaml文件，这样可以完全还原项目的提交历史和版本依赖。
#### 4.1.5 pnpm prune
prune移除项目中不需要的依赖包，配置项支持 --prod(删除在 devDependencies 中指定的包)和 --no-optional(删除在 optionalDependencies 中指定的包。).
当全局或者单例模式下使用store-dir时会尤其有用，可以用脚本周期性的删除历史版本依赖。
WARNING prune 命令目前不支持在 monorepo中递归执行。 可以删除一个只安装 production 依赖的monorepo 的几个 node_modules 文件夹，然后重新再用 pnpm install --prod 安装。
### 4.2 review dependencies 查看依赖
#### 4.2.1 pnpm list
> 别名: ls。

此命令会以一个树形结构输出所有的已安装package的版本及其依赖。添加参数--json后会输出JSON格式的日志。
### 4.3 run scripts运行脚本
#### 4.3.1 pnpm run
> 别名: run-script。

运行一个在 package的 manifest 文件中定义的脚本。
假如您有个 start 脚本配置在了package.json 中，像这样：
```jsx
"scripts": {
    "start": "start-storybook -s ./assets -p 23762 -c __storybook"
}
```
您现在可以使用 pnpm run start运行该脚本！ 很简单吧？ 对于那些不喜欢敲键盘而浪费时间的人要注意的另一件事是，所有脚本都会有 pnpm 命令的别名，所以最终 pnpm run start 的简写是 pnpm start （**仅适用于**那些不与已有的pnpm 命令相同名字的脚本）。注意不要命令里面嵌套pnpm run command，否则会造成循环执行。
## 5. 如何切换
分为三个步骤： 
第一:
```jsx
rm -rf node_modules  //  删除原本的node_modules

pnpm import package-lock.json/yarn.lock   // 把 lock 文件转换为 pnpm
```
第二: 把所有 script 相关的 都换为 pnpm
第三：跑一下 build/dev  这时候 项目中的幽灵依赖自会暴露出来，解决一下       

此外

1. 如果你的项目是  monorepo 那么你可能需要定义 pnpm-workspace.yaml
2. 如果你的某些依赖项 由于历史原因 依赖于扁平化的 node_modules 可以使用 [shamefully-hois](https://link.juejin.cn?target=https%3A%2F%2Fwww.pnpm.cn%2Fnpmrc%23shamefully-hoist)配置它
3. 如果你的项目 不适用于 软链，那么 可以使用 node-linker: hoisted 来获得扁平化并且没有软链的 node_modules
4. 如果你切换了 registery 在是呀 pnpm 安装全局包会收到  ERR_PNPM_REGISTRIES_MISMATCH  报错需要执行一下：
```jsx
pnpm install -g
 pnpm install -g pnpm

```

[github.com/pnpm/pnpm/i…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fpnpm%2Fpnpm%2Fissues%2F3361)

1. 匹配路径问题，比如在webpack里，原本的路径可能不管用了，因为现在真实的路径是在 node_modules/.pnpm/* 下边的
2. 当你需要在 node_modules 内改东西，可能会影响到所有你的电脑内所有你用到的地方 :)
## 6. 参考文章

- [超越npm和yarn的包管理工具,为什么说pnpm才是工程化项目的未来。](https://juejin.cn/post/7115756767908200478) 
- [都2022年了，pnpm快到碗里来！ ](https://juejin.cn/post/7053340250210795557)
- [探讨npm依赖管理之peerDependencies](https://www.cnblogs.com/wonyun/p/9692476.html)
