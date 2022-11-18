"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
var config_1 = require("../config");
var log = function (t, cb) {
    if (t === void 0) { t = ''; }
    process.stdout.write(config_1.color.white);
    console.log(t);
    process.stdout.write(config_1.reset);
    var res = {
        content: t,
        type: 'log',
        value: 'white'
    };
    cb && cb(res);
    return res;
};
exports.log = log;
