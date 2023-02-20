import{_ as a,c as s,o as e,a as n}from"./app.7f1206cf.js";const _=JSON.parse('{"title":"2022-03-sqlite3的命令行使用","description":"","frontmatter":{},"headers":[],"relativePath":"2022/2022-03-sqlite3的命令行使用.md","lastUpdated":1676736399000}'),l={name:"2022/2022-03-sqlite3的命令行使用.md"},t=n(`<h1 id="_2022-03-sqlite3的命令行使用" tabindex="-1">2022-03-sqlite3的命令行使用 <a class="header-anchor" href="#_2022-03-sqlite3的命令行使用" aria-hidden="true">#</a></h1><h2 id="_1-打开某个sqlite3数据库" tabindex="-1">1. 打开某个sqlite3数据库 <a class="header-anchor" href="#_1-打开某个sqlite3数据库" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sqlite3 qianqu</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-显示所有的表" tabindex="-1">2. 显示所有的表 <a class="header-anchor" href="#_2-显示所有的表" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">.table</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_3-设置显示格式" tabindex="-1">3. 设置显示格式 <a class="header-anchor" href="#_3-设置显示格式" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">.header on</span></span>
<span class="line"><span style="color:#A6ACCD;">.mode column</span></span>
<span class="line"><span style="color:#A6ACCD;">.timer on</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_4-查询某个表" tabindex="-1">4. 查询某个表 <a class="header-anchor" href="#_4-查询某个表" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">select * from custom_nav;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_5-删除某个表" tabindex="-1">5. 删除某个表 <a class="header-anchor" href="#_5-删除某个表" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">DROP TABLE database_name.table_name;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_6-某个表增加一行" tabindex="-1">6. 某个表增加一行 <a class="header-anchor" href="#_6-某个表增加一行" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">INSERT INTO TABLE_NAME [(column1, column2, column3,...columnN)]  </span></span>
<span class="line"><span style="color:#A6ACCD;">VALUES (value1, value2, value3,...valueN);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_7-某个表删除一行" tabindex="-1">7. 某个表删除一行 <a class="header-anchor" href="#_7-某个表删除一行" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">DELETE FROM table_name WHERE [condition];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_8-某个表修改一行" tabindex="-1">8. 某个表修改一行 <a class="header-anchor" href="#_8-某个表修改一行" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">UPDATE table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">SET column1 = value1, column2 = value2...., columnN = valueN</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE [condition];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_9-某个表加一列" tabindex="-1">9. 某个表加一列 <a class="header-anchor" href="#_9-某个表加一列" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">ALTER TABLE database_name.table_name ADD COLUMN column_def...;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_10-某个表改列名" tabindex="-1">10. 某个表改列名 <a class="header-anchor" href="#_10-某个表改列名" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">ALTER TABLE database_name.table_name RENAME TO new_table_name;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-hidden="true">#</a></h2><ul><li><a href="https://www.runoob.com/sqlite/sqlite-tutorial.html" target="_blank" rel="noreferrer">sqlite-tutorial</a></li></ul>`,23),i=[t];function p(o,c,r,d,h,C){return e(),s("div",null,i)}const A=a(l,[["render",p]]);export{_ as __pageData,A as default};
