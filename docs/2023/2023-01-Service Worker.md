# 2023-01-Service Worker
## 1. Service Worker
Service Worker其实是很容被大家忽视的一种缓存机制，因为它通常是和PWA(Progressive Web Application)联系在一起的，用于开发离线的Web应用。
这个时候，很多人会觉得如果我不开发离线应用，那是不是我就不需要Service Worker了？
其实不然，Service Worker还提供了拦截前端请求的能力，使得它能够结合Local Storage 成为一个独立的缓存方案。所以它仅仅可以用于实现前端静态资源的缓存，还能用来开发离线的Web应用。
这样的话，我们可以把Service Worker看做一种前端资源的请求代理，每一个前端页面发出的请求都会先由这个代理进行处理，然后再决定请求是直接发送到服务器，还是从本地Local Storage读取内容返回。
Service Worker会拦截所有浏览器发出来的请求，你可以通过代码去控制Rest API这些请求发送到服务器，而js/css等静态资源，通过Cache Storage存储在浏览器端。
和浏览器自动的资源缓存机制相比，Service Worker加上Cache Storage这个缓存机制，具有更高的准确性和可靠性。因为它可以确保两点：

- 1. 缓存永远不过期，你只要下载一次，就永远不需要再重新下载，除非主动删除。
- 2. 永远不会访问过期的资源，换句话说，如果发布了一个新版本，那么你可以通过版本化的一些机制，来确保用户访问到的一定是最新的资源。

这样，你的前端应用就像一个只需要安装一次的APP，安装过之后，就不需要再重新下载了，这样使用起来加载速度会更快。
### 1.1 介绍Service Worker
Service Worker是一段独立于页面之外的js脚本，它并不在Web页面中运行，但是会在Web页面加载时，由一段代码去触发注册、下载和激活。一旦安装完成之后，Service Wroker就会拦截所有当前域名下的所有请求，由代码逻辑决定该如何处理。
### 1.2 注册Service Work
使用Service Work的第一步，就是告诉浏览器当前域名下我需要使用Service Worker。
```jsx
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    // 注册成功
    console.log('Service work registered');
  }, (err) => {
    // 注册失败
    console.log('Service work registeration failed', err);
  })
}
```
> umi写到app.ts中，sw.js放到public文件夹下，如果报找不到sw.js，就重新跑一下pnpm dev

### 1.3 在Service Work安装之后初始化缓存机制
```jsx
const cacheName = 'qingfengmy';
self.addEventListener('install', function (e) {
  console.log('Service worker installed.');
  // 初始化Cache Storage
  const cacheOpenPromise= caches.open(cacheName);
  // 安装过程中，等待Cache Storage配置完成
  e.waitUntil(cacheOpenPromise)
});
```
### 1.4 Cache Storage介绍
Cache Storage也是浏览器提供的一种缓存机制，专门用于缓存一个请求的request和response的配对关系。此外，它还提供了API，用来判断某个request是不是有对应的response已经缓存。所以Cache Storage也可以认为是专门为Service Worker提供的缓存机制。
每次打开web页面时，页面其实都会调用service worker的register方法去注册，但是浏览器会判断脚本内容是否有变化，只有发生变化才会重新安装。
cache的api [https://developer.mozilla.org/zh-CN/docs/Web/API/Cache](https://developer.mozilla.org/zh-CN/docs/Web/API/Cache)

- match
- matchAll
- add
- addAll
- put
- delete
- keys
### 1.5 拦截请求
当Service Worker安装完成后，接下来就是处于运行状态了，能够拦截前端请求了。
比如你可以通过监听fetch事件来处理所有的请求，接口发送服务器，资源使用本地的缓存。
```jsx
self.addEventListener('fetch', e => {
  // 如果请求的路径不是js结尾，就通过return false来告诉Service Worker这个请求应该发送到服务器
  console.log('request url', e.request.url);
  if (!e.request.url.endsWith('.js') || e.request.url.startsWith('chrome-extension://')) {
    return false;
  }
  // 检查cache中是否有对应的response
  const promise = caches.open(cacheName).then(cache => {
    // 使用cache.match
    return cache.match(e.request).then(res => {
      if (res) {
        // 如果缓存有值就直接返回结果
        return Promise.resolve(res);
      } else {
        // 否则发出请求，并存到cache
        return fetch(e.request).then(fetchedResponse => {
          // 更新cache
          cache.put(e.request, fetchedResponse.clone());
          return fetchedResponse;
        })
      }
    })
  })
  // 使用e.respondWith方法给请求返回内容
  e.respondWith(promise);
});
```
### 1.6 预缓存
```jsx
self.addEventListener('install', e => {
  // 当确定要访问某些资源时，提前请求并添加到缓存中。
  // 这个模式叫做“预缓存”
  e.waitUntil(
    caches.open('service-worker-test-precache').then(cache => {
      return cache.addAll(['/static/index.js', '/static/index.css', '/static/mashroom.jpg'])
    })
  )
})

self.addEventListener('fetch', e => {
  // 缓存中能找到就返回，找不到就网络请求，之后再写入缓存并返回。
  // 这个称为 CacheFirst 的缓存策略。
  return e.respondWith(
    caches.open('service-worker-test-precache').then(cache => {
      return cache.match(e.request).then(matchedResponse => {
        return matchedResponse || fetch(e.request).then(fetchedResponse => {
          cache.put(e.request, fetchedResponse.clone())
          return fetchedResponse
        })
      })
    })
  )
})
```
### 1.7 总结
这是一种最为高效的静态资源缓存策略，因为只会下载一次，但同时也对静态资源的打包有一定要求，那就是任何一次代码更新，都需要有唯一的路径。按内容生成hash可以满足这个要求。
当然，在实际的项目中，使用Service Worker其实还有更多的考虑因素，比如何时删掉旧版本的缓存，如何处理请求失败等等。

