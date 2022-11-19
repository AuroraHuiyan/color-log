"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.banner = void 0;
var config_1 = require("../config");
var banner = function (t, color, cb) {
    var _a;
    if (t === void 0) { t = ''; }
    var bgc = ('bg' + color.slice(0, 1).toUpperCase() + color.slice(1).toLowerCase());
    var bg = (_a = config_1.bgc[bgc]) !== null && _a !== void 0 ? _a : config_1.reset;
    console.log(bg + t + config_1.reset);
    var res = {
        type: 'banner',
        content: t,
        value: color
    };
    cb && cb(res);
    return res;
};
exports.banner = banner;
