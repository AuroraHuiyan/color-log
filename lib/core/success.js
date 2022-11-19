"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = void 0;
var config_1 = require("../config");
var success = function (t, cb) {
    if (t === void 0) { t = ''; }
    console.log(config_1.color.green + t + config_1.reset);
    var res = {
        type: 'success',
        content: t,
        value: 'green'
    };
    cb && cb(res);
    return res;
};
exports.success = success;
