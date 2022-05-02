[**English**](./README.md)
# color-log


## 描述
一个提供更多颜色和样式的输出工具。


## 安装
可以使用npm或yarn安装。

`npm i @huiyan/color-log`

`yarn add @huiyan/color-log`


## 说明
此工具基于 console.log 和 process.stdout 进行封装，请在使用前确保你可以使用它。


## 举例
基本的用法如下：

```js
const colorlog  = require('@huiyan/color-log');

colorlog.log('This is the log print.');
colorlog.info('This is the info print.');
colorlog.success('This is the success print.');
colorlog.warn('This is the warn print.');
colorlog.error('This is the error print.');
colorlog.banner('This is the banner print.', 'red');
colorlog.text('This is the text print.', 'underscore');
```

此外，函数的最后一个参数可以通过传递回调函数来控制打印结束后的行为。

回调函数的参数是本次打印的基本信息，参数也会被返回。

```ts
export type Result = {
    content: string,
    type: string,
    value?: string
};

export type Callback = (options: Result) => unknown;
```
