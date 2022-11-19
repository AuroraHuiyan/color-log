"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
var config_1 = require("../config");
var log = function (t, cb) {
    if (t === void 0) { t = ''; }
    console.log(config_1.color.white + t + config_1.reset);
    var res = {
        type: 'log',
        content: t,
        value: 'white'
    };
    cb && cb(res);
    return res;
};
exports.log = log;
