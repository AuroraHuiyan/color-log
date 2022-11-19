[**中文**](./README_CN.md)
# color-log


## Describe
A tool that provides color and style printing.


## Instructions
It works as console.log logger, so make sure you can use it.


## Install
Use npm or yarn.

`npm i @huiyan/color-log`

`yarn add @huiyan/color-log`


## Example to use
The basic usage is as follows:

```js
const { colorlog }  = require('@huiyan/color-log');

colorlog.log('This is the log print.');
colorlog.info('This is the info print.');
colorlog.success('This is the success print.');
colorlog.warn('This is the warn print.');
colorlog.error('This is the error print.');
colorlog.banner('This is the banner print.', 'red');
colorlog.text('This is the text print.', 'dim');
colorlog.text('This is the text print.', ['underline', 'bright']);
```

In addition, the last parameter of the function can control the behavior after printing by passing the callback function.

The parameter of the callback function is the basic information of this printing, and this parameter will also be returned.

```ts
export type Result = {
    content: string,
    type: string,
    value?: string
};

export type Callback = (options: Result) => unknown;
```

You can also preview the printing effect by using the test function.

```js
const { colorlog }  = require('@huiyan/color-log');

colorlog.test();
```


## Utils
To cope with more usage scenarios, color-log provides some convenient tool functions. More tool functions may be provided in future versions.


### logEx
Used to expand the original console.log.

```js
const { logEx } = require('@huiyan/color-log');

console.log(['red', 'bgWhite', 'underline'], 'hello world');
console.log(['\x1b[31m', 'bgWhite', 'underline'], 'hello world');
console.log(['\x1b[31m', 'bgWhite', 'underline', 'hello world']);
```
