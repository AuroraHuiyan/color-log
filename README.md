[**中文**](./README_CN.md)
# color-log


## Describe
A tool that provides color and style printing.


## Install
Use npm or yarn.

`npm i @huiyan/color-log`

`yarn add @huiyan/color-log`


## Instructions
It works as console.log logger and process.stdout logger, so make sure you can use it.


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
colorlog.text('This is the text print.', 'underscore');
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