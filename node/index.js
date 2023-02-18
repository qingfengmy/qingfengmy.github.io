const fs = require('fs')
const path = require('path');

const dir = '2023';

// 读所有目录的文件
const files = fs.readdirSync(path.join('../docs', dir))
  .filter((file) => {
    return path.extname(file).toLowerCase() === '.md' && file !== 'index.md';
  }).reverse();

const json = [];
let content = `${dir}年文章目录 共${files.length}篇
`;
let lastDate = '';
for (file of files) {
  // file 文件名带扩展名
  // name 文件名
  // extname 扩展名
  const name = path.parse(file).name;
  const extname = path.extname(file);
  const date = file.substr(5, 2);
  if (lastDate !== date) {
    lastDate = date;
    json.push({
      text: `${date}月`,
      items: [
        {
          "text": name,
          "link": `./${encodeURIComponent(file)}`
        }
      ]
    })
    content += `## ${date}月
`
    content += `- [${name}](./${file})
`;
  } else {
    json[json.length - 1].items.push({
      "text": name,
      "link": `./${encodeURIComponent(file)}`
    })
  }
  content += `- [${name}](./${file})
`;
}

// 生成json
fs.writeFile(path.join('../docs', dir, 'menu.json'), JSON.stringify(json), err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('json写入成功')
})
// 生成目录
fs.writeFile(path.join('../docs', dir, 'index.md'), content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('md写入成功');
})
