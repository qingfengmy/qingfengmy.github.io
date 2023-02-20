import{_ as s,c as a,o as n,a as l}from"./app.7f1206cf.js";const i=JSON.parse('{"title":"2022-06-bigdecimal.js","description":"","frontmatter":{},"headers":[],"relativePath":"2022/2022-06-bigdecimal.md","lastUpdated":1676736399000}'),o={name:"2022/2022-06-bigdecimal.md"},p=l(`<h1 id="_2022-06-bigdecimal-js" tabindex="-1">2022-06-bigdecimal.js <a class="header-anchor" href="#_2022-06-bigdecimal-js" aria-hidden="true">#</a></h1><h2 id="_1-需求场景" tabindex="-1">1. 需求场景 <a class="header-anchor" href="#_1-需求场景" aria-hidden="true">#</a></h2><p>js大数的计算由于精度问题不准确，需要一个和java一样的bigdecimal.</p><h2 id="_2-bigdecimal-js" tabindex="-1">2. bigdecimal.js <a class="header-anchor" href="#_2-bigdecimal-js" aria-hidden="true">#</a></h2><ul><li><a href="https://www.npmjs.com/package/bigdecimal.js" target="_blank" rel="noreferrer">https://www.npmjs.com/package/bigdecimal.js</a></li><li><a href="https://srknzl.github.io/bigdecimal.js/api/1.1.1/docs/modules.html" target="_blank" rel="noreferrer">https://srknzl.github.io/bigdecimal.js/api/1.1.1/docs/modules.html</a></li></ul><p>选这个是因为它是按照java的api实现的</p><blockquote><p>this implementation is inspired from java BigDecimal class</p></blockquote><h2 id="_3-api" tabindex="-1">3. API <a class="header-anchor" href="#_3-api" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Big</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> MC</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> RoundingMode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> MathContext </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bigdecimal.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 加减乘除基本运算 0.29*100 = 28.9999999</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">29</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">((</span><span style="color:#F78C6C;">23</span><span style="color:#A6ACCD;">)))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">subtract</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">23</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">multiply</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">divide</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">numberValue</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toPlainString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEngineeringString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 四舍五入 1/3 报错</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">divide</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">numberValue</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 保留整数</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">divideToIntegralValue</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">numberValue</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 保留两位小数</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">divideWithMathContext</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MC</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">numberValue</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 保留两位小数且向上取整</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">divideWithMathContext</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MC</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> RoundingMode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CEILING))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">numberValue</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 保留整数向上取整</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const res = Big(1).divideToIntegralValue(Big(3), new MC(0, RoundingMode.CEILING)).numberValue(); // 报错</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const res = Big(1).divideWithMathContext(Big(3), new MC(0, RoundingMode.CEILING)).numberValue(); // 报错</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">divideWithMathContext</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MC</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setScale</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> RoundingMode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CEILING)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">numberValue</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">divide</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> RoundingMode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CEILING)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">numberValue</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 取商和余数</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">divideAndRemainder</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 抹去结尾的0</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.200</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stripTrailingZeros</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">numberValue</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 比较是否相等</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equals</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2.0</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">compareTo</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Big</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2.0</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-向上取整保留两位小数的终极方案" tabindex="-1">4. 向上取整保留两位小数的终极方案 <a class="header-anchor" href="#_4-向上取整保留两位小数的终极方案" aria-hidden="true">#</a></h2><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const res</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> = Big(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">).divide(Big(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">), </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">, RoundingMode.CEILING).numberValue();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(res</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,11),e=[p];function t(c,r,A,C,y,F){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};