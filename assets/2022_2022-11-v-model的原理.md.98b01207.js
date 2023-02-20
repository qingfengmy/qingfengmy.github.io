import{_ as s,c as a,o as n,a as l}from"./app.7f1206cf.js";const i=JSON.parse('{"title":"2022-11-v-model的原理","description":"","frontmatter":{},"headers":[],"relativePath":"2022/2022-11-v-model的原理.md","lastUpdated":1676736399000}'),p={name:"2022/2022-11-v-model的原理.md"},o=l(`<h1 id="_2022-11-v-model的原理" tabindex="-1">2022-11-v-model的原理 <a class="header-anchor" href="#_2022-11-v-model的原理" aria-hidden="true">#</a></h1><h2 id="_1-需求场景" tabindex="-1">1. 需求场景 <a class="header-anchor" href="#_1-需求场景" aria-hidden="true">#</a></h2><p>v-model实现了表单和对象的双向绑定，有时候我们会想他是怎么实现的，想antd的form.item都有value和onchange事件。</p><h2 id="_2-相关文档" tabindex="-1">2. 相关文档 <a class="header-anchor" href="#_2-相关文档" aria-hidden="true">#</a></h2><ul><li>v-model处理原生表单：<a href="https://cn.vuejs.org/guide/essentials/forms.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/essentials/forms.html</a></li><li>v-model处理自定义表单：<a href="https://cn.vuejs.org/guide/extras/render-function.html#v-model" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/extras/render-function.html#v-model</a></li></ul><h2 id="_3-原生表单" tabindex="-1">3. 原生表单 <a class="header-anchor" href="#_3-原生表单" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">input</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">:value=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">@input=&quot;event</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">text</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">event.target.value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>文本类型的 <code>&lt;input /&gt;</code> 和 <code>&lt;textarea /&gt;</code> 元素会绑定 value property 并侦听 input 事件；</li><li><code>&lt;input type=&quot;checkbox&quot; /&gt;</code> 和 <code>&lt;input type=&quot;radio&quot; /&gt;</code> 会绑定 checked property 并侦听 change 事件；</li><li><code>&lt;select /&gt;</code> 会绑定 value property 并侦听 change 事件</li></ul><h2 id="_4-自定义组件" tabindex="-1">4. 自定义组件 <a class="header-anchor" href="#_4-自定义组件" aria-hidden="true">#</a></h2><p>实现modelValue和update:modelValue的props即可。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">count.vue</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">button</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@click=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handleSub</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/butto</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">span&gt;</span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">props.modelValue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">}}</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/spa</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">button</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@click=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handleAdd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/butto</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">defineProps,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">defineEmits</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">props</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">defineProps</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">modelValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#FFCB6B;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">emits</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">defineEmits</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">update:modelValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#FFCB6B;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">handleSub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">isNaN(props.modelValue</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">emits(&quot;update:modelValue&quot;,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">emits(&quot;update:modelValue&quot;,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">props.modelValue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#FFCB6B;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">handleAdd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">isNaN(props.modelValue</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">emits(&quot;update:modelValue&quot;,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">emits(&quot;update:modelValue&quot;,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">props.modelValue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/script&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>使用</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Count v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> /</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">count</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ref</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,13),e=[o];function t(c,r,D,C,y,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
