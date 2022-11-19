"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warn = void 0;
var config_1 = require("../config");
var warn = function (t, cb) {
    if (t === void 0) { t = ''; }
    console.log(config_1.color.yellow + t + config_1.reset);
    var res = {
        type: 'warn',
        content: t,
        value: 'yellow'
    };
    cb && cb(res);
    return res;
};
exports.warn = warn;
