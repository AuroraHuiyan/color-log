"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
var config_1 = require("../config");
var info = function (t, cb) {
    if (t === void 0) { t = ''; }
    console.log(config_1.color.blue + t + config_1.reset);
    var res = {
        type: 'info',
        content: t,
        value: 'blue'
    };
    cb && cb(res);
    return res;
};
exports.info = info;
