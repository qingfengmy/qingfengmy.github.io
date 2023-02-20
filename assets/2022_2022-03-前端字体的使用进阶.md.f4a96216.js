import{_ as s,c as a,o as n,a as e}from"./app.7f1206cf.js";const y=JSON.parse('{"title":"2022-03-前端字体的使用进阶","description":"","frontmatter":{},"headers":[],"relativePath":"2022/2022-03-前端字体的使用进阶.md","lastUpdated":1676736399000}'),l={name:"2022/2022-03-前端字体的使用进阶.md"},p=e(`<h1 id="_2022-03-前端字体的使用进阶" tabindex="-1">2022-03-前端字体的使用进阶 <a class="header-anchor" href="#_2022-03-前端字体的使用进阶" aria-hidden="true">#</a></h1><h2 id="_1-普通使用" tabindex="-1">1. 普通使用 <a class="header-anchor" href="#_1-普通使用" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @font-face {</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-family: YouSheBiaoTiHei;</span></span>
<span class="line"><span style="color:#A6ACCD;">    src: url(&#39;YouSheBiaoTiHei.ttf&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  div {</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-family: YouSheBiaoTiHei;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-需求" tabindex="-1">2. 需求 <a class="header-anchor" href="#_2-需求" aria-hidden="true">#</a></h2><p>一个字体包很大，但是我们一般只有其中的几个字，比如这一次的需求，我们只用这个特殊字体展示数字，也就是可能用到的数字是</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">0123456789.个十百千万亿</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>网上有个方案可以把字体截出来，1M多的字体截完后只有1K多。</p><h2 id="_3-软截取-unicode-range" tabindex="-1">3. 软截取(unicode-range) <a class="header-anchor" href="#_3-软截取-unicode-range" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">@font-face {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-family: YouSheBiaoTiHei;</span></span>
<span class="line"><span style="color:#A6ACCD;">  unicode-range: U+30-39,U+4E07,U+4EBF,U+5341,U+5343,U+767E;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面的截取不会真的把字体包缩小，只是缩小了范围。</p><h2 id="_4-硬截取-glyphhanger" tabindex="-1">4. 硬截取(<a href="https://www.npmjs.com/package/glyphhanger" target="_blank" rel="noreferrer">glyphhanger</a>) <a class="header-anchor" href="#_4-硬截取-glyphhanger" aria-hidden="true">#</a></h2><p>安装比较麻烦，除了依赖node，还依赖python。它的npm上链接了一篇文章介绍mac怎么安装:<a href="https://www.sarasoueidan.com/blog/glyphhanger/" target="_blank" rel="noreferrer"> How I set up Glyphhanger on macOS for optimizing and converting font files for the Web</a></p><p>安装步骤如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install -g glyphhanger</span></span>
<span class="line"><span style="color:#A6ACCD;">// 安装python3</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://bootstrap.pypa.io/get-pip.py | python3</span></span>
<span class="line"><span style="color:#A6ACCD;">// 安装截字体的python依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">pip3 install fonttools</span></span>
<span class="line"><span style="color:#A6ACCD;">pip3 install brotli</span></span>
<span class="line"><span style="color:#A6ACCD;">pip3 install zopfli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_5-glyphhanger的使用" tabindex="-1">5. glyphhanger的使用 <a class="header-anchor" href="#_5-glyphhanger的使用" aria-hidden="true">#</a></h2><p>它支持字体的转化和字体的截取。它支持从远程网页上截取字体，也支持本地截取字体。</p><blockquote><p>node14是可以的，node16报如下错误</p></blockquote><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">Error</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ENOENT</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> no such file or directory</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mkdir</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-1-本地截取字体" tabindex="-1">5.1 本地截取字体 <a class="header-anchor" href="#_5-1-本地截取字体" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">glyphhanger --whitelist=0123456789.十百千万亿  --subset=YouSheBiaoTiHei.ttf --css</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>执行上面的命令会生成三个文件</p><ul><li>YouSheBiaoTiHei-subset.ttf</li><li>YouSheBiaoTiHei-subset.woff2</li><li>YouSheBiaoTiHei-subset.zopfli.woff</li></ul><p>也会输出一段css的文本</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">@font-face {</span></span>
<span class="line"><span style="color:#A6ACCD;">  src: url(YouSheBiaoTiHei-subset.woff2) format(&quot;woff2&quot;), url(YouSheBiaoTiHei-subset.zopfli.woff) format(&quot;woff&quot;), url(YouSheBiaoTiHei-subset.ttf) format(&quot;truetype&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  unicode-range: U+2E,U+30-39,U+4E07,U+4EBF,U+5341,U+5343,U+767E;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_5-2-远程网页的使用方式" tabindex="-1">5.2 远程网页的使用方式 <a class="header-anchor" href="#_5-2-远程网页的使用方式" aria-hidden="true">#</a></h3><p>我们本地开一个服务，访问<code>http://127.0.0.1:8080/index.html</code>,index.html的内容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @font-face {</span></span>
<span class="line"><span style="color:#A6ACCD;">      font-family: YouSheBiaoTiHei;</span></span>
<span class="line"><span style="color:#A6ACCD;">      src: url(&#39;YouSheBiaoTiHei.ttf&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    div {</span></span>
<span class="line"><span style="color:#A6ACCD;">      font-family: YouSheBiaoTiHei;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    1234567890十百千万亿</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后我们执行命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">glyphhanger http://127.0.0.1:8080/index.html --family=&#39;YouSheBiaoTiHei&#39;  --subset=YouSheBiaoTiHei.ttf --css</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>得到跟本地一样的输出。</p><blockquote><p>需要注意的是：执行命令的当前文件夹下，必须有<code>YouSheBiaoTiHei.ttf</code>完整字体</p></blockquote><h2 id="_6-参考文章" tabindex="-1">6. 参考文章 <a class="header-anchor" href="#_6-参考文章" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6898498211766501389" target="_blank" rel="noreferrer">前端字体截取</a></li><li><a href="https://www.npmjs.com/package/glyphhanger" target="_blank" rel="noreferrer">npm-glyphhanger</a></li><li><a href="https://www.sarasoueidan.com/blog/glyphhanger/" target="_blank" rel="noreferrer">How I set up Glyphhanger on macOS for optimizing and converting font files for the Web</a></li></ul>`,33),t=[p];function o(i,c,r,h,d,C){return n(),a("div",null,t)}const u=s(l,[["render",o]]);export{y as __pageData,u as default};
