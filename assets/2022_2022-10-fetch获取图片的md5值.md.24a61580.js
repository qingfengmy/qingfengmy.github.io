import{_ as s,c as n,o as a,a as e}from"./app.7f1206cf.js";const D=JSON.parse('{"title":"2022-10-fetch获取图片的md5值","description":"","frontmatter":{},"headers":[],"relativePath":"2022/2022-10-fetch获取图片的md5值.md","lastUpdated":1676736399000}'),l={name:"2022/2022-10-fetch获取图片的md5值.md"},p=e(`<h1 id="_2022-10-fetch获取图片的md5值" tabindex="-1">2022-10-fetch获取图片的md5值 <a class="header-anchor" href="#_2022-10-fetch获取图片的md5值" aria-hidden="true">#</a></h1><h2 id="_1-需求场景" tabindex="-1">1. 需求场景 <a class="header-anchor" href="#_1-需求场景" aria-hidden="true">#</a></h2><p>拿到一个图片的MD5值。</p><h2 id="_2-思路" tabindex="-1">2. 思路 <a class="header-anchor" href="#_2-思路" aria-hidden="true">#</a></h2><p>http请求图片地址，拿到二进制数据，再计算md5值。</p><h2 id="_3-实现方式" tabindex="-1">3. 实现方式 <a class="header-anchor" href="#_3-实现方式" aria-hidden="true">#</a></h2><h3 id="_3-1-img标签" tabindex="-1">3.1 img标签 <a class="header-anchor" href="#_3-1-img标签" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">export const md5Image = (imagePath: string) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const img = new Image();</span></span>
<span class="line"><span style="color:#A6ACCD;">    img.setAttribute(&#39;crossOrigin&#39;, &#39;Anonymous&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    img.src = imagePath;</span></span>
<span class="line"><span style="color:#A6ACCD;">    img.onload = (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const canvas = document.createElement(&#39;canvas&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      const context = canvas.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      const w = img.width;</span></span>
<span class="line"><span style="color:#A6ACCD;">      const h = img.height;</span></span>
<span class="line"><span style="color:#A6ACCD;">      canvas.width = w;</span></span>
<span class="line"><span style="color:#A6ACCD;">      canvas.height = h;</span></span>
<span class="line"><span style="color:#A6ACCD;">      context &amp;&amp; context.drawImage(img, 0, 0, w, h);</span></span>
<span class="line"><span style="color:#A6ACCD;">      const type = &#39;image/jpg&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 将canvas元素中的图像转变为DataURL</span></span>
<span class="line"><span style="color:#A6ACCD;">      const dataurl = canvas.toDataURL(type);</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 抽取DataURL中的数据部分，并进行Base64解码</span></span>
<span class="line"><span style="color:#A6ACCD;">      const bin = atob(dataurl.split(&#39;,&#39;)[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 创建空的Uint8Array</span></span>
<span class="line"><span style="color:#A6ACCD;">      const buffer = new Uint8Array(bin.length);</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 将图像数据逐字节放入Uint8Array中</span></span>
<span class="line"><span style="color:#A6ACCD;">      // eslint-disable-next-line no-plusplus</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (let i = 0; i &lt; bin.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        buffer[i] = bin.charCodeAt(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 利用Uint8Array创建Blob对象</span></span>
<span class="line"><span style="color:#A6ACCD;">      const blob = new Blob([buffer.buffer], { type });</span></span>
<span class="line"><span style="color:#A6ACCD;">      const fileReader = new FileReader();</span></span>
<span class="line"><span style="color:#A6ACCD;">      fileReader.readAsBinaryString(blob);</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 提取成功</span></span>
<span class="line"><span style="color:#A6ACCD;">      fileReader.onload = (evt: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (evt.target.readyState === FileReader.DONE) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 二进制数据结果</span></span>
<span class="line"><span style="color:#A6ACCD;">          const imgFlag = evt.target.result;</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 进行md5加密</span></span>
<span class="line"><span style="color:#A6ACCD;">          const spark = new SparkMD5();</span></span>
<span class="line"><span style="color:#A6ACCD;">          spark.appendBinary(imgFlag);</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(spark.end());</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这种方式因为图片的二进制流是从canvas中拿出来的，可能跟真实的图片有误差，导致不准确。</p><h3 id="_3-2-xmlhttprequest" tabindex="-1">3.2 xmlhttprequest <a class="header-anchor" href="#_3-2-xmlhttprequest" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">export const md5ImageByXMLRequest = (imagePath: string) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const xmlhttp = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#A6ACCD;">    xmlhttp.open(&#39;GET&#39;, imagePath, true);</span></span>
<span class="line"><span style="color:#A6ACCD;">    xmlhttp.responseType = &#39;blob&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    xmlhttp.setRequestHeader(&#39;Access-Control-Allow-Origin&#39;, &#39;*&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    xmlhttp.onerror = (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // console.error(&#39;md5-image&#39;, e);</span></span>
<span class="line"><span style="color:#A6ACCD;">      reject();</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    xmlhttp.onload = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.status === 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const blob = this.response;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const fileReader = new FileReader();</span></span>
<span class="line"><span style="color:#A6ACCD;">        fileReader.readAsBinaryString(blob);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 提取成功</span></span>
<span class="line"><span style="color:#A6ACCD;">        fileReader.onload = (evt: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (evt.target.readyState === FileReader.DONE) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 二进制数据结果</span></span>
<span class="line"><span style="color:#A6ACCD;">            const imgFlag = evt.target.result;</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 进行md5加密</span></span>
<span class="line"><span style="color:#A6ACCD;">            const spark = new SparkMD5();</span></span>
<span class="line"><span style="color:#A6ACCD;">            spark.appendBinary(imgFlag);</span></span>
<span class="line"><span style="color:#A6ACCD;">            resolve(spark.end());</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">        fileReader.onerror = (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.error(e);</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject();</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    xmlhttp.send();</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这种写法没问题，但和fretch相比不简洁。</p><h3 id="_3-3-fetch" tabindex="-1">3.3 fetch <a class="header-anchor" href="#_3-3-fetch" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">export const md5ImageByFetch = (imagePath: string) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    fetch(imagePath).then((res: any) =&gt; res.blob()).then((blob: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const fileReader = new FileReader();</span></span>
<span class="line"><span style="color:#A6ACCD;">      fileReader.readAsBinaryString(blob);</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 提取成功</span></span>
<span class="line"><span style="color:#A6ACCD;">      fileReader.onload = (evt: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (evt.target.readyState === FileReader.DONE) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 二进制数据结果</span></span>
<span class="line"><span style="color:#A6ACCD;">          const imgFlag = evt.target.result;</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 进行md5加密</span></span>
<span class="line"><span style="color:#A6ACCD;">          const spark = new SparkMD5();</span></span>
<span class="line"><span style="color:#A6ACCD;">          spark.appendBinary(imgFlag);</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(spark.end());</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">      fileReader.onerror = (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.error(e);</span></span>
<span class="line"><span style="color:#A6ACCD;">        reject();</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_4-fetch的response" tabindex="-1">4. fetch的response <a class="header-anchor" href="#_4-fetch的response" aria-hidden="true">#</a></h2><p>上面的方法用到了response的blob方法。response有很多的属性和方法如下：</p><ul><li>Response.ok： 返回一个布尔值，表示请求是否成功，true对应 HTTP 请求的状态码 200 到 299，false对应其他的状态码。</li><li>Response.status：返回一个数字，表示 HTTP 回应的状态码（例如200，表示成功请求）。</li><li>Response.statusText：返回一个字符串，表示 HTTP 回应的状态信息（例如请求成功以后，服务器返回&quot;OK&quot;）。</li><li>Response.url: 返回请求的 URL。如果 URL 存在跳转，该属性返回的是最终 URL。</li><li>Response.type: 返回请求的类型。可能的值如下：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">basic：普通请求，即同源请求。</span></span>
<span class="line"><span style="color:#A6ACCD;">cors：跨域请求。</span></span>
<span class="line"><span style="color:#A6ACCD;">error：网络错误，主要用于 Service Worker。</span></span>
<span class="line"><span style="color:#A6ACCD;">opaque：如果fetch()请求的type属性设为no-cors，就会返回这个值，详见请求部分。表示发出的是简单的跨域请求，类似&lt;form&gt;表单的那种跨域请求。</span></span>
<span class="line"><span style="color:#A6ACCD;">opaqueredirect：如果fetch()请求的redirect属性设为manual，就会返回这个值，详见请求部分。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>Response.redirected: 返回一个布尔值，表示请求是否发生过跳转。</li><li>Response.headers: 对应 HTTP 回应的所有标头，其属性有:</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Headers.get()：根据指定的键名，返回键值。</span></span>
<span class="line"><span style="color:#A6ACCD;">Headers.has()： 返回一个布尔值，表示是否包含某个标头。</span></span>
<span class="line"><span style="color:#A6ACCD;">Headers.set()：将指定的键名设置为新的键值，如果该键名不存在则会添加。</span></span>
<span class="line"><span style="color:#A6ACCD;">Headers.append()：添加标头。</span></span>
<span class="line"><span style="color:#A6ACCD;">Headers.delete()：删除标头。</span></span>
<span class="line"><span style="color:#A6ACCD;">Headers.keys()：返回一个遍历器，可以依次遍历所有键名。</span></span>
<span class="line"><span style="color:#A6ACCD;">Headers.values()：返回一个遍历器，可以依次遍历所有键值。</span></span>
<span class="line"><span style="color:#A6ACCD;">Headers.entries()：返回一个遍历器，可以依次遍历所有键值对（[key, value]）。</span></span>
<span class="line"><span style="color:#A6ACCD;">Headers.forEach()：依次遍历标头，每个标头都会执行一次参数函数。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>response.text()：得到文本字符串。</li><li>response.json()：得到 JSON 对象。</li><li>response.blob()：得到二进制 Blob 对象。</li><li>response.formData()：得到 FormData 表单对象。</li><li>response.arrayBuffer()：得到二进制 ArrayBuffer 对象。</li></ul><h2 id="_5-参考文章" tabindex="-1">5. 参考文章 <a class="header-anchor" href="#_5-参考文章" aria-hidden="true">#</a></h2><ul><li><a href="https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html" target="_blank" rel="noreferrer">阮一峰-Fetch API 教程</a></li></ul>`,23),t=[p];function o(c,r,i,A,C,d){return a(),n("div",null,t)}const h=s(l,[["render",o]]);export{D as __pageData,h as default};
