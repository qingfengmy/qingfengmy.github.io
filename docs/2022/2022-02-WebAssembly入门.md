# 2022-02-WebAssembly入门

## 1. webassembly是什么

- WebAssembly有一套完整的语义，实际上wasm是体积小且加载快的二进制格式。
- WebAssembly是一种可以使用非js编程语言编写代码并且能够在浏览器上运行的技术方案，实际是一种新的字节码格式。
- web的第四种语言：2019年12月5日，WebAssembly正式成为w3c的标准，js可以和wasm互调。
- WebAssembly与其他的汇编语言不一样，它不依赖于具体的物理机器，可以抽象的理解

> web技术的第四门语言，js可以和wasm互调。


## 2. js实现斐波那契数列

```
function fib(x) {
    if (x <= 0) {
        return 0;
    }
    if (x <= 2) {
        return 1;
    }
    return fib(x - 1) + fib(x - 2);
}

console.time('测速1');
const res = fib(40);
console.log('res:', res);
console.timeEnd('测速1');
```

> 940毫秒


## 3. c实现斐波那契数列

```
int fib(int x) { 
  if(x<=0){
    return 0;
  }
  if(x<=2){
    return 1;
  }
  return fib(x-1)+fib(x-2);
}
```

## 4. c编译为wasm

> 编译网址：[WasmFiddle](https://wasdk.github.io/WasmFiddle/)


下载wasm文件到前端项目

```
(module
  (type $t0 (func (param i32) (result i32)))
  (func $fib (type $t0) (param $p0 i32) (result i32)
    (local $l1 i32)
    i32.const 1
    local.set $l1
    block $B0
      block $B1
        local.get $p0
        i32.const 1
        i32.lt_s
        br_if $B1
        local.get $p0
        i32.const 3
        i32.lt_s
        br_if $B0
        local.get $p0
        i32.const -1
        i32.add
        call $fib
        local.get $p0
        i32.const -2
        i32.add
        call $fib
        i32.add
        return
      end
      i32.const 0
      local.set $l1
    end
    local.get $l1)
  (table $T0 0 funcref)
  (memory $memory 1)
  (export "memory" (memory 0))
  (export "fib" (func $fib)))
```

## 5. js调wasm

```
fetch('./program.wasm')
    .then(res => res.arrayBuffer())
    .then(bytes => WebAssembly.compile(bytes)).then(mod => {
        const instance = new WebAssembly.Instance(mod);
        const a = instance.exports;
        console.time('测速2');
        const res = a.fib(40);
        console.log('res:', res);
        console.timeEnd('测速2');
    })
```

## 6. 本地起服务

fetch必须是`http`或者`https`的，不能是本地的，所以这里用`http-server`起一个服务

```
http-server
```

## 7. 参考文章

- [【代码实战】下一代web技术，WebAssembly入门教程，让我们初步认识一下](https://www.bilibili.com/video/BV13i4y1n74s?from=search&seid=2389936303311116036)
- [C编译为js的在线编译器](https://wasdk.github.io/WasmFiddle/)
