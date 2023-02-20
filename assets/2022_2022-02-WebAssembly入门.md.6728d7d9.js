import{_ as s,c as a,o as n,a as l}from"./app.7f1206cf.js";const b=JSON.parse('{"title":"2022-02-WebAssembly入门","description":"","frontmatter":{},"headers":[],"relativePath":"2022/2022-02-WebAssembly入门.md","lastUpdated":1676736399000}'),e={name:"2022/2022-02-WebAssembly入门.md"},p=l(`<h1 id="_2022-02-webassembly入门" tabindex="-1">2022-02-WebAssembly入门 <a class="header-anchor" href="#_2022-02-webassembly入门" aria-hidden="true">#</a></h1><h2 id="_1-webassembly是什么" tabindex="-1">1. webassembly是什么 <a class="header-anchor" href="#_1-webassembly是什么" aria-hidden="true">#</a></h2><ul><li>WebAssembly有一套完整的语义，实际上wasm是体积小且加载快的二进制格式。</li><li>WebAssembly是一种可以使用非js编程语言编写代码并且能够在浏览器上运行的技术方案，实际是一种新的字节码格式。</li><li>web的第四种语言：2019年12月5日，WebAssembly正式成为w3c的标准，js可以和wasm互调。</li><li>WebAssembly与其他的汇编语言不一样，它不依赖于具体的物理机器，可以抽象的理解</li></ul><blockquote><p>web技术的第四门语言，js可以和wasm互调。</p></blockquote><h2 id="_2-js实现斐波那契数列" tabindex="-1">2. js实现斐波那契数列 <a class="header-anchor" href="#_2-js实现斐波那契数列" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function fib(x) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (x &lt;= 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (x &lt;= 2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return fib(x - 1) + fib(x - 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.time(&#39;测速1&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const res = fib(40);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;res:&#39;, res);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.timeEnd(&#39;测速1&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>940毫秒</p></blockquote><h2 id="_3-c实现斐波那契数列" tabindex="-1">3. c实现斐波那契数列 <a class="header-anchor" href="#_3-c实现斐波那契数列" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">int fib(int x) { </span></span>
<span class="line"><span style="color:#A6ACCD;">  if(x&lt;=0){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(x&lt;=2){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return fib(x-1)+fib(x-2);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_4-c编译为wasm" tabindex="-1">4. c编译为wasm <a class="header-anchor" href="#_4-c编译为wasm" aria-hidden="true">#</a></h2><blockquote><p>编译网址：<a href="https://wasdk.github.io/WasmFiddle/" target="_blank" rel="noreferrer">WasmFiddle</a></p></blockquote><p>下载wasm文件到前端项目</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(module</span></span>
<span class="line"><span style="color:#A6ACCD;">  (type $t0 (func (param i32) (result i32)))</span></span>
<span class="line"><span style="color:#A6ACCD;">  (func $fib (type $t0) (param $p0 i32) (result i32)</span></span>
<span class="line"><span style="color:#A6ACCD;">    (local $l1 i32)</span></span>
<span class="line"><span style="color:#A6ACCD;">    i32.const 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    local.set $l1</span></span>
<span class="line"><span style="color:#A6ACCD;">    block $B0</span></span>
<span class="line"><span style="color:#A6ACCD;">      block $B1</span></span>
<span class="line"><span style="color:#A6ACCD;">        local.get $p0</span></span>
<span class="line"><span style="color:#A6ACCD;">        i32.const 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        i32.lt_s</span></span>
<span class="line"><span style="color:#A6ACCD;">        br_if $B1</span></span>
<span class="line"><span style="color:#A6ACCD;">        local.get $p0</span></span>
<span class="line"><span style="color:#A6ACCD;">        i32.const 3</span></span>
<span class="line"><span style="color:#A6ACCD;">        i32.lt_s</span></span>
<span class="line"><span style="color:#A6ACCD;">        br_if $B0</span></span>
<span class="line"><span style="color:#A6ACCD;">        local.get $p0</span></span>
<span class="line"><span style="color:#A6ACCD;">        i32.const -1</span></span>
<span class="line"><span style="color:#A6ACCD;">        i32.add</span></span>
<span class="line"><span style="color:#A6ACCD;">        call $fib</span></span>
<span class="line"><span style="color:#A6ACCD;">        local.get $p0</span></span>
<span class="line"><span style="color:#A6ACCD;">        i32.const -2</span></span>
<span class="line"><span style="color:#A6ACCD;">        i32.add</span></span>
<span class="line"><span style="color:#A6ACCD;">        call $fib</span></span>
<span class="line"><span style="color:#A6ACCD;">        i32.add</span></span>
<span class="line"><span style="color:#A6ACCD;">        return</span></span>
<span class="line"><span style="color:#A6ACCD;">      end</span></span>
<span class="line"><span style="color:#A6ACCD;">      i32.const 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      local.set $l1</span></span>
<span class="line"><span style="color:#A6ACCD;">    end</span></span>
<span class="line"><span style="color:#A6ACCD;">    local.get $l1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  (table $T0 0 funcref)</span></span>
<span class="line"><span style="color:#A6ACCD;">  (memory $memory 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  (export &quot;memory&quot; (memory 0))</span></span>
<span class="line"><span style="color:#A6ACCD;">  (export &quot;fib&quot; (func $fib)))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_5-js调wasm" tabindex="-1">5. js调wasm <a class="header-anchor" href="#_5-js调wasm" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">fetch(&#39;./program.wasm&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .then(res =&gt; res.arrayBuffer())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .then(bytes =&gt; WebAssembly.compile(bytes)).then(mod =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const instance = new WebAssembly.Instance(mod);</span></span>
<span class="line"><span style="color:#A6ACCD;">        const a = instance.exports;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.time(&#39;测速2&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        const res = a.fib(40);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;res:&#39;, res);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.timeEnd(&#39;测速2&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_6-本地起服务" tabindex="-1">6. 本地起服务 <a class="header-anchor" href="#_6-本地起服务" aria-hidden="true">#</a></h2><p>fetch必须是<code>http</code>或者<code>https</code>的，不能是本地的，所以这里用<code>http-server</code>起一个服务</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">http-server</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_7-参考文章" tabindex="-1">7. 参考文章 <a class="header-anchor" href="#_7-参考文章" aria-hidden="true">#</a></h2><ul><li><a href="https://www.bilibili.com/video/BV13i4y1n74s?from=search&amp;seid=2389936303311116036" target="_blank" rel="noreferrer">【代码实战】下一代web技术，WebAssembly入门教程，让我们初步认识一下</a></li><li><a href="https://wasdk.github.io/WasmFiddle/" target="_blank" rel="noreferrer">C编译为js的在线编译器</a></li></ul>`,20),o=[p];function c(t,i,r,A,C,d){return n(),a("div",null,o)}const h=s(e,[["render",c]]);export{b as __pageData,h as default};
