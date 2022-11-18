"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
var config_1 = require("../config");
var info = function (t, cb) {
    if (t === void 0) { t = ''; }
    process.stdout.write(config_1.color.blue);
    console.log(t);
    process.stdout.write(config_1.reset);
    var res = {
        content: t,
        type: 'info',
        value: 'blue'
    };
    cb && cb(res);
    return res;
};
exports.info = info;
