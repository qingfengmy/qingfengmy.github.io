import{_ as s,c as a,o as n,a as e}from"./app.7f1206cf.js";const l="/assets/2022-11-mulujiegou.c9e12212.png",p="/assets/2022-11-aliyun.6683d4fb.png",m=JSON.parse('{"title":"2022-11-一次官网开发的技术选型调研","description":"","frontmatter":{},"headers":[],"relativePath":"2022/2022-11-一次官网开发的技术选型调研.md","lastUpdated":1676736987000}'),t={name:"2022/2022-11-一次官网开发的技术选型调研.md"},o=e(`<h1 id="_2022-11-一次官网开发的技术选型调研" tabindex="-1">2022-11-一次官网开发的技术选型调研 <a class="header-anchor" href="#_2022-11-一次官网开发的技术选型调研" aria-hidden="true">#</a></h1><h2 id="_1-场景需求" tabindex="-1">1. 场景需求 <a class="header-anchor" href="#_1-场景需求" aria-hidden="true">#</a></h2><p>公司官网，首页和介绍页需要seo，其他页面不需要，但有业务功能。</p><h2 id="_2-技术方案" tabindex="-1">2. 技术方案 <a class="header-anchor" href="#_2-技术方案" aria-hidden="true">#</a></h2><ul><li>ssr</li><li>静态页面</li><li>静态页面+React</li></ul><h2 id="_3-ssr被pass的原因" tabindex="-1">3. ssr被pass的原因 <a class="header-anchor" href="#_3-ssr被pass的原因" aria-hidden="true">#</a></h2><p>ssr本质就是起一个node服务，然后这个node服务返回带dom结构的html。</p><p>react提供了把虚拟dom转化成dom字符串的功能，node服务再把dom字符串返回给页面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// ES modules</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDOMServer from &#39;react-dom/server&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOMServer.renderToString(element)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>缺点就是需要服务器起一个服务，占用服务器资源，当网站需要大规模推广的时候，服务端承受的压力较大。</p><h2 id="_4-静态页面被pass的原因" tabindex="-1">4. 静态页面被pass的原因 <a class="header-anchor" href="#_4-静态页面被pass的原因" aria-hidden="true">#</a></h2><p>开发麻烦</p><h2 id="_5-静态页面-react的实现" tabindex="-1">5. 静态页面+React的实现 <a class="header-anchor" href="#_5-静态页面-react的实现" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import { defineConfig } from &#39;umi&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import routes from &#39;./config/routes&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import theme from &#39;./src/theme&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const outputPath = &#39;dist/react&#39;; // 指定输出路径</span></span>
<span class="line"><span style="color:#A6ACCD;">const env = p<wbr>rocess.env.NODE_ENV;</span></span>
<span class="line"><span style="color:#A6ACCD;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  nodeModulesTransform: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;none&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: routes,</span></span>
<span class="line"><span style="color:#A6ACCD;">  fastRefresh: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  outputPath,</span></span>
<span class="line"><span style="color:#A6ACCD;">  publicPath: env === &#39;development&#39; ? &#39;/&#39; : &#39;./&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  hash:true,  //对打包的静态资源随机增加后缀</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &#39;轻索&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  dynamicImport: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    loading: &#39;@/pages/loading&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  antd: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    compact: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  dva: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    hmr: true, // 表示是否启用 dva model 的热更新</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  theme,</span></span>
<span class="line"><span style="color:#A6ACCD;">  proxy: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;/api&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;target&#39;: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;changeOrigin&#39;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;pathRewrite&#39;: { &#39;^/api&#39; : &#39;&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸</span></span>
<span class="line"><span style="color:#A6ACCD;">  copy:[</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      from: &#39;web&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      to:&#39;../&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>web文件夹下就是静态页面，最终打包出来的路径就是 <img src="`+l+`" alt="图片.png"></p><h2 id="_6-参考文章" tabindex="-1">6. 参考文章 <a class="header-anchor" href="#_6-参考文章" aria-hidden="true">#</a></h2><ul><li><a href="https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertostring" target="_blank" rel="noreferrer">react官网-reactDomServer</a></li><li><a href="https://juejin.cn/post/6844903943902855176#heading-4" target="_blank" rel="noreferrer">一文吃透 React SSR 服务端渲染和同构原理 </a></li></ul><h2 id="_7-遗留问题" tabindex="-1">7. 遗留问题 <a class="header-anchor" href="#_7-遗留问题" aria-hidden="true">#</a></h2><blockquote><p>localhost:8000 --- 访问index.html没问题 localhost:8000/douyin.html --- 访问douyin.html没问题 localhost:8000/qingsuo.html --- 访问qingsuo.html没问题 localhost:8000/react --- 不会到react/index.html localhost:8000/react/index.html --- 才会访问react/index.html localhost:8000/react/todo --- 也不会到react/index.html</p></blockquote><p>需要SRE配置<code>/react/*</code>全部指向<code>/react/index.html</code></p><h2 id="_8-遗留问题解决" tabindex="-1">8. 遗留问题解决 <a class="header-anchor" href="#_8-遗留问题解决" aria-hidden="true">#</a></h2><p>上面的问题，只是在测试环境中有问题，我本地采取了两种静态服务器去查看问题，发现都是正常的。</p><h3 id="_8-1-nginx" tabindex="-1">8.1 nginx <a class="header-anchor" href="#_8-1-nginx" aria-hidden="true">#</a></h3><h3 id="_8-2-http-server" tabindex="-1">8.2 http-server <a class="header-anchor" href="#_8-2-http-server" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">- cd dist</span></span>
<span class="line"><span style="color:#A6ACCD;">- http-server</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_8-3-生产环境增加oss配置" tabindex="-1">8.3 生产环境增加oss配置 <a class="header-anchor" href="#_8-3-生产环境增加oss配置" aria-hidden="true">#</a></h3><p>oss不支持应该是oss必须加什么设置，最后联系SRE，生产环境因为是单独的桶，所以可以单独设置支持子目录如下： <img src="`+p+'" alt="图片.png"></p><h3 id="_8-4-测试环境的配置" tabindex="-1">8.4 测试环境的配置 <a class="header-anchor" href="#_8-4-测试环境的配置" aria-hidden="true">#</a></h3><p>测试环境是整个公司都公用一个桶，所以不方便做这些统一的设置，这里采取路径指向的设置</p>',29),r=[o];function c(i,d,h,C,A,_){return n(),a("div",null,r)}const u=s(t,[["render",c]]);export{m as __pageData,u as default};
