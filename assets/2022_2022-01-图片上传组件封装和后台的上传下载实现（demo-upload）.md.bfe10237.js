import{_ as s,c as n,o as a,a as l}from"./app.7f1206cf.js";const e="/assets/2022-01-upload.fdd31a69.png",D=JSON.parse('{"title":"2022-01-图片上传组件前后台封装实现","description":"","frontmatter":{},"headers":[],"relativePath":"2022/2022-01-图片上传组件封装和后台的上传下载实现（demo-upload）.md","lastUpdated":1676736399000}'),p={name:"2022/2022-01-图片上传组件封装和后台的上传下载实现（demo-upload）.md"},o=l(`<h1 id="_2022-01-图片上传组件前后台封装实现" tabindex="-1">2022-01-图片上传组件前后台封装实现 <a class="header-anchor" href="#_2022-01-图片上传组件前后台封装实现" aria-hidden="true">#</a></h1><h2 id="_1-antd的upload组件示例" tabindex="-1">1. antd的upload组件示例 <a class="header-anchor" href="#_1-antd的upload组件示例" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;Upload name=&quot;zfile&quot; action=&quot;/upload&quot; data={{ operate: &#39;temp&#39; }}&gt;&lt;/Upload&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>我们的目标就是实现一个一样配置的ZUpload组件。</p><h2 id="_2-formdata实现图片上传" tabindex="-1">2. formdata实现图片上传 <a class="header-anchor" href="#_2-formdata实现图片上传" aria-hidden="true">#</a></h2><blockquote><p>XMLHttpRequest Level 2添加了一个新的接口FormData.利用FormData对象,我们可以通过JavaScript用一些键值对来模拟一系列表单控件,我们还可以使用XMLHttpRequest的send()方法来异步的提交这个&quot;表单&quot;.比起普通的ajax,使用FormData的最大优点就是我们可以异步上传一个二进制文件</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;input type=&quot;file&quot; multiple={true} ref={ref =&gt; (this.input = ref)} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">componentDidMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const self = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.input.addEventListener(&#39;change&#39;, function(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //监听change事件，选择文件后触发</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;&gt;&gt;&gt;input.change&#39;, e);</span></span>
<span class="line"><span style="color:#A6ACCD;">    let formData = new FormData();</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let k in self.props.data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      formData.append(k, self.props.data[k]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    formData.append(self.props.name, e.target.files[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    self</span></span>
<span class="line"><span style="color:#A6ACCD;">      .request(formData)</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;&gt;&gt;&gt;request.success&#39;, res);</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.setState({ fileList: [...self.state.fileList, res.url] });</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      .catch(err =&gt; console.error(&#39;&gt;&gt;&gt;request.fail&#39;, err));</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 封装XMLHttpRequest</span></span>
<span class="line"><span style="color:#A6ACCD;">request = formData =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let xhr = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#A6ACCD;">    xhr.open(&#39;post&#39;, this.props.action);</span></span>
<span class="line"><span style="color:#A6ACCD;">    xhr.responseType = &#39;json&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    xhr.onload = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;onload&#39;, xhr);</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(xhr.response, xhr);</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    xhr.onerror = () =&gt; reject(xhr);</span></span>
<span class="line"><span style="color:#A6ACCD;">    xhr.send(formData);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>代码地址:<a href="https://gitee.com/changkong0310/demo-umi-ui/blob/master/myapp/src/components/z_upload/index.js" target="_blank" rel="noreferrer">zupload</a> 参考文章:<a href="https://www.cnblogs.com/shapeY/p/7903414.html" target="_blank" rel="noreferrer">formData实现图片上传</a> 参考文章:<a href="https://www.cnblogs.com/shapeY/p/7891636.html" target="_blank" rel="noreferrer">input[type=&#39;file&#39;]样式美化及实现图片预览</a> 参考文章:<a href="https://segmentfault.com/a/1190000004322487" target="_blank" rel="noreferrer">你真的会使用XMLHttpRequest吗？</a></p></blockquote><h2 id="_3-express实现" tabindex="-1">3. express实现 <a class="header-anchor" href="#_3-express实现" aria-hidden="true">#</a></h2><p>express需要实现图片上传、静态服务器、图片下载三个功能。</p><h3 id="_3-1-express静态服务器实现" tabindex="-1">3.1 express静态服务器实现 <a class="header-anchor" href="#_3-1-express静态服务器实现" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 静态资源中间件</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(express.static(&quot;static&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-2-express-multer实现图片上传" tabindex="-1">3.2 express+multer实现图片上传 <a class="header-anchor" href="#_3-2-express-multer实现图片上传" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const express = require(&quot;express&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const multer = require(&quot;multer&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const querystring = require(&#39;querystring&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const distFile = __dirname + &quot;/static/upload&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = express();</span></span>
<span class="line"><span style="color:#A6ACCD;">// 主要配置</span></span>
<span class="line"><span style="color:#A6ACCD;">const storage = multer.diskStorage({</span></span>
<span class="line"><span style="color:#A6ACCD;">  destination: function(req, file, cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    cb(null, distFile);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  filename: function(req, file, cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const ext = file.originalname.split(&quot;.&quot;).pop();</span></span>
<span class="line"><span style="color:#A6ACCD;">    cb(null, \`\${new Date().valueOf()}.\${ext}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const upload = multer({ storage: storage });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 判断staic/upload文件夹是否存在，如果不存在就新建一个</span></span>
<span class="line"><span style="color:#A6ACCD;">// recursive: true 支持递归创建</span></span>
<span class="line"><span style="color:#A6ACCD;">if (!fs.existsSync(distFile)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  fs.mkdir(distFile, { recursive: true }, err =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new Error(err);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.post(&quot;/upload&quot;, upload.single(&quot;zfile&quot;), function(req, res, next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // req.body 将具有文本域数据，如果存在的话</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(querystring.encode(req.body)); //console.log(req.query.picTitle);//get</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(req.file); //req.file文件的具体信息</span></span>
<span class="line"><span style="color:#A6ACCD;">  res.send({ url: &quot;http://localhost:3000/upload/&quot; + req.file.filename });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(3000, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;Example app listening on port 3000!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-3-express-formidable实现图片上传" tabindex="-1">3.3 express+formidable实现图片上传 <a class="header-anchor" href="#_3-3-express-formidable实现图片上传" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const formidable = require(&quot;formidable&quot;); //载入formidable</span></span>
<span class="line"><span style="color:#A6ACCD;">const express = require(&quot;express&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = express();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.post(&quot;/upload&quot;, function(req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var form = new formidable.IncomingForm();</span></span>
<span class="line"><span style="color:#A6ACCD;">  form.encoding = &quot;utf-8&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  form.uploadDir = &quot;./static/upload&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  form.keepExtensions = true;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  form.parse(req, function(err, field, files) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(files.zfile);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(field);//  field.opration</span></span>
<span class="line"><span style="color:#A6ACCD;">    const file = files.zfile;</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.send({</span></span>
<span class="line"><span style="color:#A6ACCD;">      url: &#39;http://localhost:3000/&#39;+file.path</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(3000, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;服务器已启动!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-4-图片下载" tabindex="-1">3.4 图片下载 <a class="header-anchor" href="#_3-4-图片下载" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">app.get(&#39;/download/:name&#39;, function(req,res){</span></span>
<span class="line"><span style="color:#A6ACCD;">  const filename = req.params.name</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(filename)</span></span>
<span class="line"><span style="color:#A6ACCD;">  res.download(\`static/upload/\${filename}\`, filename); </span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_4-koa实现图片上传、静态服务器和图片下载" tabindex="-1">4. koa实现图片上传、静态服务器和图片下载 <a class="header-anchor" href="#_4-koa实现图片上传、静态服务器和图片下载" aria-hidden="true">#</a></h2><ul><li>koa-body实现图片上传</li><li>koa-static实现静态服务器</li><li>koa-send实现图片下载</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const Koa = require(&quot;koa&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const koaBody = require(&quot;koa-body&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const path = require(&quot;path&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const router = require(&quot;koa-router&quot;)();</span></span>
<span class="line"><span style="color:#A6ACCD;">const static = require(&quot;koa-static&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const send = require(&quot;koa-send&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = new Koa();</span></span>
<span class="line"><span style="color:#A6ACCD;">// 静态服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(static(path.resolve(__dirname, &quot;./static&quot;)));</span></span>
<span class="line"><span style="color:#A6ACCD;">// 上传</span></span>
<span class="line"><span style="color:#A6ACCD;">router.post(</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;/upload&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  koaBody({</span></span>
<span class="line"><span style="color:#A6ACCD;">    multipart: true,//默认是false，不支持文件上传</span></span>
<span class="line"><span style="color:#A6ACCD;">    formidable: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      uploadDir: &quot;static/upload&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      onFileBegin: (name, file) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // rename</span></span>
<span class="line"><span style="color:#A6ACCD;">        const ext = file.name.split(&quot;.&quot;).pop(); // 获取上传文件扩展名</span></span>
<span class="line"><span style="color:#A6ACCD;">        const filePath = __dirname + &quot;/static/upload/&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const fileName = \`\${new Date().valueOf()}.\${ext}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">        file.name = fileName;</span></span>
<span class="line"><span style="color:#A6ACCD;">        file.path = path.resolve(filePath, fileName);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // =&gt; POST body</span></span>
<span class="line"><span style="color:#A6ACCD;">    // console.log(&quot;111&quot;, ctx.request.body);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // console.log(&quot;222&quot;, ctx.request.files);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const file = ctx.request.files.zfile;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.body = { url: &quot;http://localhost:3000/upload/&quot; + file.name };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 下载</span></span>
<span class="line"><span style="color:#A6ACCD;">router.get(&quot;/download/:name&quot;, async ctx =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const name = ctx.params.name;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const path = \`static/upload/\${name}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;download&quot;, name);</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.attachment(path);</span></span>
<span class="line"><span style="color:#A6ACCD;">  await send(ctx, path);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(router.routes());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(3000, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;koa is listening in 3000&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>代码地址:<a href="https://gitee.com/changkong0310/demo-node/tree/master/upload" target="_blank" rel="noreferrer">demo-node-uplaod</a></p></blockquote><h2 id="_5-node原生实现formdata图片上传原理" tabindex="-1">5. node原生实现formdata图片上传原理 <a class="header-anchor" href="#_5-node原生实现formdata图片上传原理" aria-hidden="true">#</a></h2><blockquote><p>本质是body转为字符串后的字符串操作</p></blockquote><p><img src="`+e+`" alt="图片.png"></p><blockquote><p>参考文章:<a href="https://houbean.github.io/2017/02/22/Node-js-HTTP%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6%E3%80%81%E5%9B%BE%E7%89%87%E4%B8%8A%E4%BC%A0/" target="_blank" rel="noreferrer">Node.js HTTP服务器中的文件、图片上传</a></p></blockquote><h2 id="_6-node原生处理post请求" tabindex="-1">6. node原生处理post请求 <a class="header-anchor" href="#_6-node原生处理post请求" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;form id=&quot;form1&quot; method=&quot;post&quot; action=&quot;submit&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;fieldset&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;legend&gt;表单1&lt;/legend&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    姓名:&lt;input type=&quot;text&quot; name=&quot;username&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    学历:&lt;select name=&quot;education&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;option value=&quot;中学&quot;&gt;中学&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;option value=&quot;大专&quot;&gt;大专&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;option value=&quot;本科&quot;&gt;本科&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;option value=&quot;硕士&quot;&gt;硕士&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;option value=&quot;博士&quot;&gt;博士&lt;/option&gt; &lt;/select</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    住址:&lt;input type=&quot;text&quot; name=&quot;address&quot; /&gt; 隐藏:&lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">      name=&quot;hide&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      disabled=&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      value=&quot;111&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input type=&quot;submit&quot; value=&quot;提交&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/fieldset&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function handleSubmit(req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var urlstr = &quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  req.addListener(&quot;data&quot;, function(postdata) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    urlstr += postdata; //接收到的表单数据字符串，这里可以用两种方法将UTF-8编码转换为中文</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  req.addListener(&quot;end&quot;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var decodedata = decodeURIComponent(urlstr); //对表单数据进行解码</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.writeHead(200, { &quot;Content-Type&quot;: &quot;text/plain; charset=utf-8&quot; });</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.write(decodedata);</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.end();</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_7-node原生实现静态服务器" tabindex="-1">7. node原生实现静态服务器 <a class="header-anchor" href="#_7-node原生实现静态服务器" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function handleStatic(req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const fileName = Path.resolve(__dirname, &quot;.&quot; + req.url);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const extName = Path.extname(fileName).substr(1);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (fs.existsSync(fileName)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //判断本地文件是否存在</span></span>
<span class="line"><span style="color:#A6ACCD;">    var mineTypeMap = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      html: &quot;text/html;charset=utf-8&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      htm: &quot;text/html;charset=utf-8&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      xml: &quot;text/xml;charset=utf-8&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      png: &quot;image/png&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      jpg: &quot;image/jpeg&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      jpeg: &quot;image/jpeg&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      gif: &quot;image/gif&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      css: &quot;text/css;charset=utf-8&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      txt: &quot;text/plain;charset=utf-8&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      mp3: &quot;audio/mpeg&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      mp4: &quot;video/mp4&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ico: &quot;image/x-icon&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      tif: &quot;image/tiff&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      svg: &quot;image/svg+xml&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      zip: &quot;application/zip&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ttf: &quot;font/ttf&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      woff: &quot;font/woff&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      woff2: &quot;font/woff2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (mineTypeMap[extName]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      res.setHeader(&quot;Content-Type&quot;, mineTypeMap[extName]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    var stream = fs.createReadStream(fileName);</span></span>
<span class="line"><span style="color:#A6ACCD;">    stream.pipe(res);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.writeHead(200, &quot;Okay&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.write(&quot;not found&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.end();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>参考文章:<a href="https://juejin.im/post/5a9660fe6fb9a0634b4da9ae" target="_blank" rel="noreferrer">关于实现一个Node.js静态服务器你所需要知道的ALL</a></p></blockquote><h2 id="_8-node原生实现下载" tabindex="-1">8. node原生实现下载 <a class="header-anchor" href="#_8-node原生实现下载" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function handleDownload(req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 实现文件下载</span></span>
<span class="line"><span style="color:#A6ACCD;">  var fileName = req.url.replace(&quot;download&quot;, &quot;static/upload&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  var filePath = Path.join(__dirname, fileName);</span></span>
<span class="line"><span style="color:#A6ACCD;">  var stats = fs.statSync(filePath);</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (stats.isFile()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.setHeader(&quot;Content-Type&quot;, &quot;application/octet-stream&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.setHeader(&quot;Content-Disposition&quot;, &quot;attachment; filename=&quot; + fileName);</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.setHeader(&quot;Content-Length&quot;, stats.size);</span></span>
<span class="line"><span style="color:#A6ACCD;">    fs.createReadStream(filePath).pipe(res);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.end(404);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>主要是两个http头：</p><ul><li>Content-Type: application/octet-stream</li><li>Content-Disposition: attachment; filename=MyFileName.ext</li></ul><p><code>Content-Type: application/octet-stream</code>告诉浏览器这是一个二进制文件，<code>Content-Disposition</code>告诉浏览器这是一个需要下载的附件并告诉浏览器默认的文件名。如果不添加<code>Content-Disposition</code>响应头，浏览器可能会下载或显示文件内容，不同浏览器的处理有所不同。</p><blockquote><p>参考文章:<a href="https://itbilu.com/nodejs/core/Nkvh9yS4W.html" target="_blank" rel="noreferrer">Node.js 中实现HTTP文件下载</a></p></blockquote>`,40),t=[o];function c(r,i,C,A,u,d){return a(),n("div",null,t)}const q=s(p,[["render",c]]);export{D as __pageData,q as default};
