# 2022-12-android的一键获取手机号码

### 1. 场景需求
一些APP可以一键获取手机号码，需要实现一样的功能。

### 2. 分析
一键登录能不能做，取决于运营商是否开放相关服务，这也是为什么过去没有一键登录，直到最近三大运营商都有了自己的开放平台：

- 移动 - 互联网能力开放平台
- 电信 - 天翼账号开放平台
- 联通 - WO+ 开放平台


要使用一键登录，需要接入运营商的 SDK。

如果要兼容三大运营商，就需要分别接入三个 SDK。现在我们也有更简单的方法，就是接入一个整合了三大运营商认证能力的第三方 SDK，目前主要有以下几家：

- 阿里 - 号码认证服务
- 极光 - 极光认证
- mob - 秒验



