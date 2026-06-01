## 1. 中文文档
> [https://github.com/typestack/routing-controllers/blob/HEAD/docs/lang/chinese/README.md](https://github.com/typestack/routing-controllers/blob/HEAD/docs/lang/chinese/README.md)
>

## 2. 基本使用
### 2.1 安装依赖
```shell
yarn add 
	express 
	body-parser 
	multer 
	routing-controllers
	reflect-metadata 
	class-transformer
	class-validator
```

```shell
yarn add 
	nodemon   // 监听文件修改并启动
	typescript
	ts-node   // node直接执行ts
	@types/node // 可以用__dirname这样的node环境中的变量值
```

### 2.2 app的代码
```shell
import 'reflect-metadata';

// 引入必要库
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';

// 创建express应用，注册所有控制器路由并返回express实例
const app = createExpressServer({
  controllers: [UserController], //声明需要使用的控制器
});

// 在3000端口运行express应用
app.listen(3000);
```

### 2.3 usercontroller.ts
```shell
import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@Controller()
export class UserController {
  @Get('/users')
  getAll() {
    return 'This action returns all users';
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns user #' + id;
  }

  @Post('/users')
  post(@Body() user: any) {
    return 'Saving user...';
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return 'Updating a user...';
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return 'Removing user...';
  }
}
```

### 2.4 启动
```shell
yarn start
```

```javascript
{
  "scripts": {
    "start": "nodemon ./src/app.ts"
  }
}
```

## 3. 基本概念
+ Controller: 定义一个类为Controller
+ JsonController: JsonController 装饰的控制器路由的响应数据将自动转换为 JSON 类型且 Content-Type 被设置为 application/json
+ Param: 定义GET、PUT、DELETE的参数
+ Body: 定义POST的参数
+ Get: 定义GET请求
+ Post: 定义POST请求
+ Put: 定义PUT请求
+ Delete: 定义DELETE请求
+ Req: 装饰器注入了一个 Request 对象
+ Res: 装饰器注入了一个 Response 对象

## 4. 从目录加载控制器
```javascript
const app = createExpressServer({
  controllers: [__dirname + '/controllers/**/*.ts'], // 支持子目录
});
```

## 5. tsconfig.json和tsconfig.node.json
+ tsconfig.json是ts的配置文件
+ tsconfig.node.json是配置ts在node下

## 6. 全局路由前缀
```javascript
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controller/UserController';

createExpressServer({
  routePrefix: '/api',
  controllers: [UserController],
}).listen(3000);
```

## 7. 注入参数
### 7.1 @param
```javascript
@Get("/users/:id")
getOne(@Param("id") id: number) { // 由于id被声明为number,将自动抛出"number"类型
}
```

> @Params装饰器可以注入所有的param参数
>

### 7.2 @QueryParam
```javascript
@Get("/users")
getUsers(@QueryParam("limit") limit: number) {
}
```

@QueryParams装饰器可以注入所有QueryParam参数

```javascript
enum Roles {
    Admin = "admin",
    User = "user",
    Guest = "guest",
}

class GetUsersQuery {

    @IsPositive()
    limit: number;

    @IsAlpha()
    city: string;

    @IsEnum(Roles)
    role: Roles;

    @IsBoolean()
    isActive: boolean;

}

@Get("/users")
getUsers(@QueryParams() query: GetUserQuery) {
    // 这里可以访问query.role,query.limit
    // 以及其它已校验的query参数
}
```

### 7.3 @Body
```javascript
@Post("/users")
saveUser(@Body() user: User) {
}
```

如果对 `@Body() `装饰的参数声明了类的类型， `routing-controllers` 将使用 [class-transformer](https://github.com/pleerock/class-transformer) 去实例化请求 `Body` 的数据。 在创建服务时配置 `{ classTransformer: false } `可以禁用该行为。

用 @BodyParam 装饰器注入请求 Body 参数

```javascript
@Post("/users")
saveUser(@BodyParam("name") userName: string) {
}
```

### 7.4 @HeaderParam
用 @HeaderParam 装饰器注入请求 Header 参数

```javascript
@Post("/users")
saveUser(@HeaderParam("authorization") token: string) {
}
```

可以使用 @HeaderParams() 装饰器注入所有请求 Header 参数。

### 7.5 @CookieParam
用 @CookieParam 装饰器注入 Cookie 参数：

```javascript
@Get("/users")
getUsers(@CookieParam("username") username: string) {
}
```

可以使用 @CookieParams() 装饰器注入所有 Cookie 参数。

### 7.6 @SessionParam
用 @SessionParam 注入一个 Session 值：

```javascript
@Get("/login")
savePost(@SessionParam("user") user: User, @Body() post: Post) {}
```

可以使用无参数的 @Session() 装饰器注入 Session 主体。

```javascript
@Get("/login")
savePost(@Session() session: any, @Body() post: Post) {}
```

被 @Session 装饰器装饰的参数默认为必填。如果你的方法中该参数是可选的，需要手动标记为非必填：

```javascript
action(@Session("user", { required: false }) user: User){}
```

Express 使用 [express-session](https://www.npmjs.com/package/express-session) / Koa 使用 [koa-session](https://www.npmjs.com/package/koa-session) 或 [koa-generic-session](https://www.npmjs.com/package/koa-generic-session) 处理 Session，因此必须先安装这些模块才能使用 @Session 装饰器。

### 7.7 @State
用 @State 装饰器注入 state 参数：

```javascript
@Get("/login")
savePost(@State("user") user: User, @Body() post: Post){
}
```

要注入整个 state 对象可以使用无参数的 @State()。 state 功能只被 Koa 支持。

### 7.8 注入上传文件
用 @UploadedFile 装饰器注入上传的文件：

```javascript
@Post("/files")
saveFile(@UploadFile("fileName") file: any) {
}
```

也可以指定 multer 上传配置：

```javascript
// 为保持代码整洁，最好将该函数抽离到单独的文件中
export const fileUploadOptions = () => {
    storage: multer.diskStorage({
        destination: (req: any, file: any, cb: any) => { ...
        },
        filename: (req: any, file: any, cb: any) => { ...
        }
    }),
    fileFilter: (req: any, file: any, cb: any) => { ...
    },
    limits: {
        fieldNameSize: 255,
        fileSize: 1024 * 1024 * 2
    }
};

// 进行配置
@Post("/files")
saveFile(@UploadedFile("fileName", { options: fileUploadOptions }) file: any) {
}
```

可以使用 @UploadFiles 装饰器注入所有上传的文件。 Routing-controllers 使用 [multer](https://github.com/expressjs/multer) 处理文件上传。 如果安装了 multers 的文件定义声明，可用 files: File[] 类型声明代替 any[]。

## 8. 限制必填参数
在装饰器配置 required: true 限制参数为必填：

```javascript
@Post("/users")
save(@Body({ required: true }) user: any) {
    // 如果请求内没有user参数，该方法不会执行
}
```

可以在其它任何参数装饰器中限制必填参数，如 @QueryParam, @BodyParam 等。 如果请求中没有必填参数，routing-controllers 将抛出一个错误。

## 9. 参数转为对象
如果对被装饰的参数声明了类的类型， routing-controllers 将使用 [class-transformer](https://github.com/pleerock/class-transformer) 实例化该参数。 [点击这里](https://github.com/typestack/routing-controllers/blob/HEAD/docs/lang/chinese/README.md#%E5%AE%9E%E4%BE%8B%E5%8C%96%E5%8F%82%E6%95%B0)了解更多。

## 10. 其他设置
### 10.1 设置ContentType
为路由设置 ContentType：

```javascript
@Get("/users")
@ContentType("text/cvs")
getUsers() {
    // ...
}
```

### 10.2 设置Location
```javascript
@Get("/users")
@Location("http://github.com")
getUsers() {
    // ...
}
```

### 10.3 设置重定向
```javascript
@Get("/users")
@Redirect("http://github.com")
getUsers() {
    // ...
}
```

通过返回字符串覆写重定向地址

```javascript
@Get("/users")
@Redirect("http://github.com")
getUsers() {
    return "https://www.google.com";
}
```

使用模版生成重定向

```javascript
@Get("/users")
@Redirect("http://github.com/:owner/:repo")
getUsers() {
    return {
        owner: "pleerock",
        repo: "routing-controllers"
    };
}
```

### 10.4. 设置HTTP响应码
```javascript
@HttpCode(201)
@Post("/users")
saveUser(@Body() user: User) {
    // ...
}
```

### 10.5 设置空响应
对于返回 void 或 Promise<void> 或 undefined 的控制器方法，将自动向客户端抛出 404 错误。 @OnUndefined 装饰器可用于设置这种情况下的状态码。

```javascript
@Delete("/users/:id")
@OnUndefined(204)
async remove(@Param("id") id: number): Promise<void> {
    return userRepository.removeById(id);
}
```

对于返回值可能为 undefined 的情况，@OnUndefined 也可以发挥作用。 下面例子中，当用户 id 不存在时 findOneById 返回 undefined，该路由将返回 404 代码，如果存在则返回 200 代码：

```javascript
@Get("/users/:id")
@OnUndefined(404)
getOne(@Param("id") id: number) {
    return userRepository.findOneById(id);
}
```

当结果为 undefined 时也可以返回一个错误类：

```javascript
import { HttpError } from 'routing-controllers';

export class UserNotFoundError extends HttpError {
  constructor() {
    super(404, 'User not found!');
  }
}
```

```javascript
@Get("/users/:id")
@OnUndefined(UserNotFoundError)
saveUser(@Param("id") id: number) {
    return userRespository.findOneById(id);
}
```

如果控制器方法返回 null 可以用 @OnNull 装饰器替代。

## 11. 自定义Header
```javascript
@Get("/users/:id")
@Header("Catch-Control", "none")
getOne(@Param("id") id: number){
    // ...
}
```

## 12. 通过服务端渲染功能渲染任意模板
```javascript
@Get("/users/:id")
@Render("index.html")
getOne() {
    return {
        param1: "these params are used",
        param2: "in templating engine"
    };
}
```

服务端渲染功能需要正确配置 express / Koa。 Koa 用户应使用第三方渲染工具如 [koa-views](https://github.com/queckezz/koa-views/)， koa-views 是唯一经过测试的渲染中间件。

## 13. 抛出HTTP错误
```javascript
@Get("/users/:id")
getOne(@Param("id") id: number) {

    const user = this.userRepository.findOneById(id);
    if(!user)
        throw new NotFoundError(`User was not found.`); // 参数选填

    return user;
}
```

当请求中的 id 未查询到用户，将返回以下 404 响应：

```javascript
{
  "name": "NotFoundError",
  "message": "User was not found."
}
```

预制错误列表

+ HttpError
+ BadRequestError
+ ForbiddenError
+ InternalServerError
+ MethodNotAllowedError
+ NotAcceptableError
+ NotFoundError
+ UnauthorizedError

可以继承 HttpError 类自行创建使用 error。 也可实现一个 toJson 函数定义返回给客户端的数据。

```javascript
class DbError extends HttpError {
  public operationName: string;
  public args: any[];

  constructor(operationName: string, args: any[] = []) {
    super(500);
    Object.setPrototypeOf(this, DbError.prototype);
    this.operationName = operationName;
    this.args = args; // 可用于内部log记录
  }

  toJson() {
    return {
      status: this.httpCode,
      failedOperation: this.operationName,
    };
  }
}
```

## 14. 允许跨域
跨域是目前大部分 web-api 应用使用的特性，配置 routing-controllers 允许跨域：

```javascript
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';

const app = createExpressServer({
  cors: true,
  controllers: [UserController],
});

app.listen(3000);
```

使用 cors 需要先安装对应模块。 express 用户需要 npm i cors，Koa 用户需要 npm i kcors。 可以如下例进行配置：

```javascript
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';

const app = createExpressServer({
  cors: {
    // cors相关配置
  },
  controllers: [UserController],
});

app.listen(3000);
```

## 15. 默认配置
在 routing-controllers 配置中覆写默认状态码。

```javascript
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';

const app = createExpressServer({
  defaults: {
    // 返回null时的默认状态码为404
    nullResultCode: 404,

    // 返回viod或Promise<void>时的默认状态码为204
    undefinedResultCode: 204,

    paramOptions: {
      // 参数默认为必填
      required: true,
    },
  },
});

app.listen(3000);
```

## 16. 中间件
@Middleware 装饰器用于自定义中间件， @UseBefore 和 @UseAfter 装饰器使用任何已有的或自定义的 express / Koa 中间件。

### 16.1 使用已有中间件
有多个方式使用中间件，以 [compression](https://github.com/expressjs/compression) 为例：

#### 16.1.1 安装 compression 中间件：
```javascript
npm install compression
```

#### 16.1.2 在方法中使用中间件：
```javascript
import { Controller, Get, UseBefore } from "routing-controllers";
let compression = require("compression");

// ...

@Get("/users/:id")
@UseBefore(compression())
getOne(@Param("id") id: number) {
    // ...
}
```

#### 16.1.3 在控制器中使用中间件：
```javascript
import { Controller, UseBefore } from 'routing-controllers';
let compression = require('compression');

@Controller()
@UseBefore(compression())
export class UserController {}
```

使用这种方式，compression 中间件将应用于 UserController 控制器下所有方法，且在方法执行前执行。同样可以使用 @UseAfter 装饰器在方法执行后应用中间件。

#### 16.1.4 要全局使用 compression 模块，可以在服务引导时注册中间件：
```javascript
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';
// 必须在调用createExpressServer前加载控制器
let compression = require('compression');
let app = createExpressServer({
  controllers: [UserController],
}); 
// 创建express应用，注册所有控制器路由并返回express实例
app.use(compression());
app.listen(3000); // 运行express应用
```

### 16.2 自定义实现express中间件
#### 16.2.1 实现express中间件的两种方式
第一种，声明一个简单的中间件函数

```javascript
export function loggingMiddleware(request: any, response: any, next?: (err?: any) => any): any {
  console.log('do something...');
  next();
}
```

第二种，创建一个类

```javascript
import { ExpressMiddlewareInterface } from 'routing-controllers';

export class MyMiddleware implements ExpressMiddlewareInterface {
  // 接口声明可选

  use(request: any, response: any, next?: (err?: any) => any): any {
    console.log('do something...');
    next();
  }
}
```

#### 16.2.2 应用
在Controller上应用

```javascript
import { Controller, UseBefore } from 'routing-controllers';
import { MyMiddleware } from './MyMiddleware';
import { loggingMiddleware } from './loggingMiddleware';

@Controller()
@UseBefore(MyMiddleware)
@UseAfter(loggingMiddleware)
export class UserController {}
```

在某个方法上应用

```javascript
@Get("/users/:id")
@UseBefore(MyMiddleware)
@UseAfter(loggingMiddleware)
getOne(@Param("id") id: number) {
    // ...
}
```

@UseBefore 在路由每次执行前执行。 @UseAfter 在路由每次执行后执行。

### 16.3 实现koa中间件
#### 16.3.1 实现的两种方式
第一种，声明一个简单的中间件函数

```javascript
export function use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
  console.log('do something before execution...');
  return next()
    .then(() => {
      console.log('do something after execution');
    })
    .catch(error => {
      console.log('error handling is also here');
    });
}
```

第二种，声明一个类

```javascript
import { KoaMiddlewareInterface } from 'routing-controllers';

export class MyMiddleware implements KoaMiddlewareInterface {
  // 接口声明可选

  use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    console.log('do something before execution...');
    return next()
      .then(() => {
        console.log('do something after execution');
      })
      .catch(error => {
        console.log('error handling is also here');
      });
  }
}
```

#### 16.3.2 应用
```javascript
import { Controller, UseBefore } from 'routing-controllers';
import { MyMiddleware } from './MyMiddleware';
import { loggingMiddleware } from './loggingMiddleware';

@Controller()
@UseBefore(MyMiddleware)
@UseAfter(loggingMiddleware)
export class UserController {}
```

```javascript
@Get("/users/:id")
@UseBefore(MyMiddleware)
@UseAfter(loggingMiddleware)
getOne(@Param("id") id: number) {
    // ...
}
```

### 16.4 全局中间件
#### 16.4.1 声明中间件
```javascript
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'before' })
export class LoggingMiddleware implements ExpressMiddlewareInterface {
  use(request: any, response: any, next: (err: any) => any): void {
    console.log('do something...');
    next();
  }
}
```

#### 16.4.2 使用中间件
```javascript
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';
import { LoggingMiddleware } from './LoggingMiddleware';

createExpressServer({
  controllers: [UserController],
  middlewares: [LoggingMiddleware],
}).listen(3000);
```

## 17. 错误处理程序
错误处理程序只能在 express 中使用， 错误处理程序工作方式与中间件相同，但接口声明为 ExpressErrorMiddlewareInterface;

### 17.1 声明
```javascript
import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any, next: (err: any) => any) {
    console.log('do something...');
    next();
  }
}
```

### 17.2 使用
自定义的错误处理程序在默认错误处理后被调用，因此不能修改响应码或 Headers。 要阻止该行为，需要在 createExpressServer 或 useExpressServer 中配置 defaultErrorHandler 选项禁用默认错误处理。

```javascript
createExpressServer({
  defaultErrorHandler: false, // 有自己的错误处理程序再禁用默认错误处理
}).listen(3000);
```

## 18. 拦截器
拦截器用于修改或替换返回给客户端的数据。 可以定义全局拦截器，也能为指定控制器或路由定义拦截器。 拦截器工作原理与中间件相似。

### 18.1 函数式拦截器
最简单的方式是通过 @UseInterceptor 直接用函数实现拦截器。

```javascript
import { Get, Param, UseInterceptor } from "routing-controllers";

// ...

@Get("/users")
@UseInterceptor(function(action: Action, content: any) {
    // 这里有路由返回的原始内容。
    // 可以进行修改并返回一个替换后的结果，该结果将作为响应返回给用户
    return content.replace(/Mike/gi, "Michael");
})
getOne(@Param("id") id: number) {
    return "Hello, I am Mike!"; // 用户将接收到”Hello, I am Michael;“响应。
}
```

也可以在控制器中使用 @UseInterceptor 装饰器。 当用于控制器时，拦截器将作用于该控制器下所有路由。

### 18.2 class式拦截器
可以声明一个拦截器类并通过 @UseInterceptor 装饰器应用：

```javascript
import { Interceptor, InterceptorInterface, Action } from 'routing-controllers';

export class NameCorrectionInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    return content.replace(/Mike/gi, 'Michael');
  }
}
```

通过以下方式在控制器应用：

```javascript
import { Get, Param, UseInterceptor } from "routing-controllers";
import { NameCorrectionInterceptor } from "./NameCorrectionInterceptor";

// ...

@Get("/users")
@UseInterceptor(NameCorrectionInterceptor)
getOne(@Param("id") id: number) {
    return "Hello, I am Mike!"; // 用户将接收到"Hello, I am Michael!"响应。
}
```

### 18.3 全局拦截器
创建一个拦截器类并用 @Interceptor 装饰来实现一个影响所有控制器的全局拦截器：

```javascript
import { Interceptor, InterceptorInterface, Action } from 'routing-controllers';

@Interceptor()
export class NameCorrectionInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    return content.replace(/Mike/gi, 'Michale');
  }
}
```

## 19. 从目录加载中间件，拦截器和控制器
```javascript
import { createExpressServer } from 'routing-controllers';
createExpressServer({
  controllers: [__dirname + '/controllers/**/*.js'],
  middlewares: [__dirname + '/middlewares/**/*.js'],
  interceptors: [__dirname + '/interceptors/**/*.js'],
}).listen(3000);
```

## 20. 实例化参数
有时候需要将用户发送的 JSON 对象解析为特定的类而不是简单的字面对象。 可以用 [class-transformer](https://github.com/pleerock/class-transformer) 实现。 需要在服务引导时配置 classTransformer: true 开启该功能：

```javascript
import { createExpressServer } from 'routing-controllers';

createExpressServer({
  classTransformer: true,
}).listen(3000);
```

现在，当解析参数时，如果对其声明了一个类的类型，routing-controllers 将根据用户发送的数据创建一个实例：

```javascript
export class User {
  firstName: string;
  lastName: string;

  getName(): string {
    return this.lastName + ' ' + this.firstName;
  }
}

@Controller()
export class UserController {
  post(@Body() user: User) {
    console.log('saving user ' + user.getName());
  }
}
```

如果 User 是一个接口，只会创建一个简单字面对象。 如果是一个类，将创建该类的实例。

该功能默认开启，作用于 @Body， @Param， @QueryParam， @BodyParam 以及其它装饰器上。 可以在 createExpressServer 函数中设置 classTransformer: false 来关闭这个功能。

学习 class-transformer 和如何处理更复杂的对象结构[戳这里](https://github.com/pleerock/class-transformer)。

## 21. 参数自动校验
有时候不仅需要解析 JSON 对象为类的实例。 比如，class-transformer 不会核对属性的类型，因此可能会出现 Typescript 运行时报错。同样你可能需要校验这些对象，如密码是否够长或电子邮件格式是否正确。

感谢 [class-validator](https://github.com/pleerock/class-validator) 我们可以轻松实现这一需求。该功能默认 开启。如果要关闭，在应用引导时配置 validation: false：

```javascript
import { createExpressServer } from 'routing-controllers';

createExpressServer({
  validation: false,
}).listen(3000);
```

在部分参数中启用，可以在对应装饰器中配置 validate: true：

```javascript
@Post("/login")
login(@Body({ validate: true }) user: User) {}
```

现在你需要定义用于声明函数参数的类型的类。 用合适的校验装饰对应的属性。

```javascript
export class User {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
```

如果没有 class-validator 的使用经验，可以[在这里](https://github.com/pleerock/class-validator)学习如何使用和处理更复杂的对象校验。

现在，如果指定一个类的类型，你的方法参数将不仅仅是该类的实例(用户发送的数据)，它们同样会被校验，因此你不必担心如邮箱格式错误或密码太短以及其它函数参数校验的问题。

```javascript
@Controller()
export class UserController {
  @Post('/login')
  login(@Body() user: User) {
    console.log(`${user.email} is for 100% sure a valid e-mail address!`);
    console.log(`${user.password.length} is for 100% sure 6 chars or more!`);
  }
}
```

如果参数不满足 class-validator 装饰器定义的校验， 将抛出一个错误并被 routing-controllers 捕获，客户端将收到 400 错误和详细的 [Validation errors](https://github.com/pleerock/class-validator#validation-errors) 报错序列。

要专门配置校验（如组别，跳过忽略属性等）或转换（如组别，排除前缀，版本等）。可以用 createExpressServer 中的 validation 配置项进行全局配置，或用 validate 对函数参数进行单独配置 - @Body({ validate: localOptions })。

## 22. 使用管理权限
Routing-controllers 附带两个装饰器实现在应用中的鉴权。

+ @Authorized
+ @CurrentUser

### 22.1 @Authorized
```javascript
import { createExpressServer, Action } from 'routing-controllers';

createExpressServer({
  authorizationChecker: async (action: Action, roles: string[]) => {
    // 这里可以使用action中的request/response对象
    // 如果装饰器定义了可以访问action角色
    // 也可以使用它们来提供详细的鉴权
    // checker必须返回boolean类型(true or false)或者Promise(回执也必须是boolean)
    // 代码demo：
    const token = action.request.headers['authorization'];

    const user = await getEntityManager().findOneByToken(User, token);
    if (user && !roles.length) return true;
    if (user && roles.find(role => user.roles.indexOf(role) !== -1)) return true;

    return false;
  },
}).listen(3000);
```

在路由中使用

```javascript
@JsonController()
export class SomeController {
  @Authorized()
  @Post('/questions')
  save(@Body() question: Question) {}

  @Authorized('POST_MODERATOR') // 指定角色或角色数组
  @Post('/posts')
  save(@Body() post: Post) {}
}
```

### 22.2 @CurrentUser装饰器
```javascript
import { createExpressServer, Action } from 'routing-controllers';

createExpressServer({
  currentUserChecker: async (action: Action) => {
    // 这里可以使用action中的request/response对象
    // 需要提供一个用来注入控制器方法的用户对象
    // 代码demo：
    const token = action.request.headers['authorization'];
    return getEntityManager().findOneByToken(User, token);
  },
}).listen(3000);
```

在控制器方法中使用

```javascript
@JsonController()
export class QuestionController {
  @Get('/questions')
  all(@CurrentUser() user?: User, @Body() question: Question) {}

  @Post('/questions')
  save(@CurrentUser({ require: true }) user: User, @Body() post: Post) {}
}
```

如果标记 @CurrentUser 为 required，当 currentUserChecker 返回空数据时，routing-controllers 将抛出 authorization 必填的错误。

## 23. 使用DI容器
routing-controllers 支持外部 DI 容器注入服务到控制器，中间件和错误处理程序中。 容器必须在应用引导时配置。 这里展示如何整合 [typedi](https://github.com/pleerock/typedi) 到 routing-controllers：

```javascript
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';

// 重要：必须在所有routing-controllers操作前设置容器。
// 包括引入控制器
useContainer(Container);

//创建和运行服务
createExpressServer({
  controllers: [__dirname + '/controllers/*.js'],
  middlewares: [__dirname + '/middlewares/*.js'],
  interceptors: [__dirname + '/interceptors/*.js'],
}).listen(3000);
```

现在注入服务到控制器：

```javascript
@Controller()
export class UsersController {
  constructor(private userRepository: UserRepository) {}

  // ... 控制器方法
}
```

对于没有暴露 get(xxx) 函数的其他 IoC 提供者，可以用 IocAdapter 创建一个 IoC 适配器，如下：

```javascript
// inversify-adapter.ts
import { IocAdapter } from 'routing-controllers';
import { Container } from 'inversify';

class InversifyAdapter implements IocAdapter {
  constructor(private readonly container: Container) {}

  get<T>(someClass: ClassConstructor<T>, action?: Action): T {
    const childContainer = this.container.createChild();
    childContainer.bind(API_SYMBOLS.ClientIp).toConstantValue(action.context.ip);
    return childContainer.resolve<T>(someClass);
  }
}
```

并通知 Routing Controllers 使用：

```javascript
// 应用启动的某个位置
import { useContainer } from 'routing-controllers';
import { Container } from 'inversify';
import { InversifyAdapter } from './inversify-adapter.ts';

const container = new Container();
const inversifyAdapter = new InversifyAdapter(container);
useContainer(inversifyAdapter);
```

## 24. 自定义参数装饰器
这里简单展示如何定制装饰器 "session user"：

```javascript
import { createParamDecorator } from 'routing-controllers';

export function UserFromSession(options?: { required?: boolean }) {
  return createParamDecorator({
    required: options && options.required ? true : false,
    value: action => {
      const token = action.request.headers['authorization'];
      return database.findUserByToken(token);
    },
  });
}
```

在控制器中使用

```javascript
@JsonController()
export class QuestionController {
  @Post()
  save(@Body() question: Question, @UserFromSession({ required: true }) user: User) {
    // 这里有已鉴权的用户，可以安全的存储问题
    // 如果数据库返回的user为undefined并且入参被设为required"
    // routing-controllers将抛出ParamterRequired错误
  }
}
```

