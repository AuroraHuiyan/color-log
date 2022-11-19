"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.text = void 0;
var config_1 = require("../config");
var text = function (t, type, cb) {
    var _a;
    if (t === void 0) { t = ''; }
    var ty = Array.isArray(type)
        ? type.map(function (v) { var _a; return (_a = config_1.type[v]) !== null && _a !== void 0 ? _a : ''; }).join('')
        : ((_a = config_1.type[type]) !== null && _a !== void 0 ? _a : config_1.reset);
    console.log(ty + t + config_1.reset);
    var res = {
        type: 'text',
        content: t,
        value: Array.isArray(type) ? type.join(',') : type
    };
    cb && cb(res);
    return res;
};
exports.text = text;
