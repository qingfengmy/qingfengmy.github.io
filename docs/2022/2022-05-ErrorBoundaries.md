# 2022-05-ErrorBoundaries

## 1. 需求场景
React官方提供了错误边界的处理方式：[Error Boundaries](https://zh-hans.reactjs.org/docs/error-boundaries.html)，部分 UI 的 JavaScript 错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。

现在要加到我们项目中。

## 2.  能捕获什么不能捕获什么
错误边界是一种 React 组件，这种组件**可以捕获发生在其子组件树任何位置的 JavaScript 错误，并打印这些错误，同时展示降级 UI**，而并不会渲染那些发生崩溃的子组件树。错误边界可以捕获发生在整个子组件树的渲染期间、生命周期方法以及构造函数中的错误。
> 注意：错误边界无法捕获以下场景中产生的错误

- 事件处理（[了解更多](https://zh-hans.reactjs.org/docs/error-boundaries.html#how-about-event-handlers)）
- 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
- 服务端渲染
- 它自身抛出来的错误（并非它的子组件）
## 3. 代码实现
如果一个 class 组件中定义了 [static getDerivedStateFromError()](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromerror) 或 [componentDidCatch()](https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch) 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {    // 更新 state 使下一次渲染能够显示降级后的 UI    
    return { hasError: true }; 
  }
  componentDidCatch(error, errorInfo) {    // 你同样可以将错误日志上报给服务器    
    logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {      // 你可以自定义降级后的 UI 并渲染     
      return <h1>Something went wrong.</h1>;  
    }
    return this.props.children; 
  }
}
```
然后你可以将它作为一个常规组件去使用：
```javascript
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```
错误边界的工作方式类似于 JavaScript 的 catch {}，不同的地方在于错误边界只针对 React 组件。只有 class 组件才可以成为错误边界组件。大多数情况下, 你只需要声明一次错误边界组件, 并在整个应用中使用它。

注意**错误边界仅可以捕获其子组件的错误**，它无法捕获其自身的错误。如果一个错误边界无法渲染错误信息，则错误会冒泡至最近的上层
## 4. 应该放到哪
错误边界的粒度由你来决定，可以将其包装在最顶层的路由组件并为用户展示一个 “Something went wrong” 的错误信息，就像服务端框架经常处理崩溃一样。你也可以将单独的部件包装在错误边界以保护应用其他部分不崩溃。
## 5. 未捕获事件的新行为
这一改变具有重要意义，**自 React 16 起，任何未被错误边界捕获的错误将会导致整个 React 组件树被卸载。**

我们对这一决定有过一些争论，但根据我们的经验，把一个错误的 UI 留在那比完全移除它要更糟糕。例如，在类似 Messenger 的产品中，把一个异常的 UI 展示给用户可能会导致用户将信息错发给别人。同样，对于支付类应用而言，显示错误的金额也比不呈现任何内容更糟糕。

此变化意味着当你迁移到 React 16 时，你可能会发现一些已存在你应用中但未曾注意到的崩溃。增加错误边界能够让你在应用发生异常时提供更好的用户体验。

例如，Facebook Messenger 将侧边栏、信息面板、聊天记录以及信息输入框包装在单独的错误边界中。如果其中的某些 UI 组件崩溃，其余部分仍然能够交互。

我们也鼓励使用 JS 错误报告服务（或自行构建），这样你能了解关于生产环境中出现的未捕获异常，并将其修复。
## 6. 关于tryCatch
try / catch 很棒但它仅能用于命令式代码（imperative code）：
```javascript
try {
  showButton();
} catch (error) {
  // ...
}
```
然而，React 组件是声明式的并且具体指出 _什么_ 需要被渲染：
```javascript
<Button />
```
错误边界保留了 React 的声明性质，其行为符合你的预期。例如，即使一个错误发生在 componentDidUpdate 方法中，并且由某一个深层组件树的 setState 引起，其仍然能够冒泡到最近的错误边界。
## 7. 关于事件处理器
错误边界**无法**捕获事件处理器内部的错误。

React 不需要错误边界来捕获事件处理器中的错误。与 render 方法和生命周期方法不同，事件处理器不会在渲染期间触发。因此，如果它们抛出异常，React 仍然能够知道需要在屏幕上显示什么。

如果你需要在事件处理器内部捕获错误，使用普通的 JavaScript try / catch 语句：
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {      // 执行操作，如有错误则会抛出   
    } catch (error) {   
      this.setState({ error });   
    } 
  }

  render() {
    if (this.state.error) {     
      return <h1>Caught an error.</h1>  
    }   
    return <button onClick={this.handleClick}>Click Me</button>  }
}
```
## 8. 实践中的Error Boundaries代码
```javascript
class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  static getDerivedStateFromError(error: Error) {
    // 上报错误
    posthog.capture('$crash', {
      error: error.stack,
    });
    return {
      hasError: true,
      error,
    };
  }

  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  render() {
    const {
      props: { fallback, children },
      state,
    } = this;

    if (state.hasError) {
      if (typeof fallback === 'function') {
        return fallback(state.error) as React.ReactNode;
      }

      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;

```
```javascript
/**
 * 应用入口
 */
function App() {
  return (
    <ErrorBoundary
      fallback={(error) => {
        return (
          <Result
            status="500"
            title="应用加载失败"
            subTitle="请稍后尝试手动重新加载"
            extra={
              <Button type="primary" onClick={() => window.location.reload()}>
                立即重新加载
              </Button>
            }
          />
        );
      }}
    >
      <Suspense fallback={<AppLoading />}>
        <RecoilRoot>
          <Entry />
        </RecoilRoot>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
```
## 9. 相关知识点

- [RecoilRoot](https://recoil.js.cn/docs/introduction/getting-started): react的状态管理库
- [posthog](https://juejin.cn/post/6844904131866411022): 产品收集信息库，包括错误收集
- [Suspense:](https://zh-hans.reactjs.org/docs/react-api.html#suspense) React.Suspense 可以指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件。



