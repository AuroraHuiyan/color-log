"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.text = void 0;
var config_1 = require("../config");
var text = function (t, type, cb) {
    var _a;
    if (t === void 0) { t = ''; }
    var ty = (_a = config_1.type[type]) !== null && _a !== void 0 ? _a : config_1.reset;
    process.stdout.write(ty);
    console.log(t);
    process.stdout.write(config_1.reset);
    var res = {
        content: t,
        type: 'text',
        value: type
    };
    cb && cb(res);
    return res;
};
exports.text = text;
