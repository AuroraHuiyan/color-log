"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warn = void 0;
var config_1 = require("../config");
var warn = function (t, cb) {
    if (t === void 0) { t = ''; }
    process.stdout.write(config_1.color.yellow);
    console.log(t);
    process.stdout.write(config_1.reset);
    var res = {
        content: t,
        type: 'warn',
        value: 'yellow'
    };
    cb && cb(res);
    return res;
};
exports.warn = warn;
