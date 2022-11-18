"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
var config_1 = require("../config");
var error = function (t, cb) {
    if (t === void 0) { t = ''; }
    process.stdout.write(config_1.color.red);
    console.log(t);
    process.stdout.write(config_1.reset);
    var res = {
        content: t,
        type: 'error',
        value: 'red'
    };
    cb && cb(res);
    return res;
};
exports.error = error;
