import{_ as s,c as n,o,a}from"./app.7f1206cf.js";const l="/assets/2022-01-prototype.5654cf1d.png",h=JSON.parse('{"title":"2022-01-js原型链","description":"","frontmatter":{},"headers":[],"relativePath":"2022/2022-01-js原型链.md","lastUpdated":1676812570000}'),t={name:"2022/2022-01-js原型链.md"},e=a(`<h1 id="_2022-01-js原型链" tabindex="-1">2022-01-js原型链 <a class="header-anchor" href="#_2022-01-js原型链" aria-hidden="true">#</a></h1><h2 id="_1-综述" tabindex="-1">1. 综述 <a class="header-anchor" href="#_1-综述" aria-hidden="true">#</a></h2><ul><li><ol><li>每个对象都有__proto__，指向创造他的函数的prototype</li></ol></li><li><ol start="2"><li>每个函数都有prototype，指向他的原型对象</li></ol></li><li><ol start="3"><li>每个原型对象都有constructor，指向他的函数</li></ol></li><li><ol start="4"><li>所有原型对象都一样，都有__proto__，指向Object.prototype</li></ol></li><li><ol start="5"><li>Object.prototype.__proto__指向null</li></ol></li><li><ol start="5"><li>Object.__proto__和Function.__proto__都指向Function.prototype</li></ol></li></ul><h2 id="_2-代码演示" tabindex="-1">2. 代码演示 <a class="header-anchor" href="#_2-代码演示" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function Person(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const allen = new Person();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * allen/Person/Person.prototype/Function/Function.prototype/Object/Object.prototype/null</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(allen.__proto__ === Person.prototype);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Person.prototype.constructor === Person);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Person.__proto__ === Function.prototype);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Function.prototype.__proto__ === Person.prototype.__proto__);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Function.prototype.__proto__ === Object.prototype);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.prototype.__proto__ === null);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Function.__proto__ === Function.prototype);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.__proto__ === Function.prototype);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_3-关系图" tabindex="-1">3. 关系图<img src="`+l+'" alt=""> <a class="header-anchor" href="#_3-关系图" aria-hidden="true">#</a></h2>',6),p=[e];function r(c,i,_,C,A,d){return o(),n("div",null,p)}const u=s(t,[["render",r]]);export{h as __pageData,u as default};
