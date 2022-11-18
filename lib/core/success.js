"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = void 0;
var config_1 = require("../config");
var success = function (t, cb) {
    if (t === void 0) { t = ''; }
    process.stdout.write(config_1.color.green);
    console.log(t);
    process.stdout.write(config_1.reset);
    var res = {
        content: t,
        type: 'success',
        value: 'green'
    };
    cb && cb(res);
    return res;
};
exports.success = success;
