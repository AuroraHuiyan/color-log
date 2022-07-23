"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config"));
var values = config_1.default.bgc;
function default_1(t, color, cb) {
    var _a;
    if (t === void 0) { t = ''; }
    var bgc = ('bg' + color.slice(0, 1).toUpperCase() + color.slice(1).toLowerCase());
    var bg = (_a = values[bgc]) !== null && _a !== void 0 ? _a : config_1.default.reset;
    process.stdout.write(bg);
    console.log(t);
    process.stdout.write(config_1.default.reset);
    var res = {
        content: t,
        type: 'banner',
        value: color
    };
    cb && cb(res);
    return res;
}
exports.default = default_1;
