"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
var config_1 = require("../config");
var error = function (t, cb) {
    if (t === void 0) { t = ''; }
    console.log(config_1.color.red + t + config_1.reset);
    var res = {
        type: 'error',
        content: t,
        value: 'red'
    };
    cb && cb(res);
    return res;
};
exports.error = error;
