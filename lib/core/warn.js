"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config"));
var values = config_1.default.color;
function default_1(t, cb) {
    if (t === void 0) { t = ''; }
    process.stdout.write(values.yellow);
    console.log(t);
    process.stdout.write(config_1.default.reset);
    var res = {
        content: t,
        type: 'warn',
        value: 'yellow'
    };
    cb && cb(res);
    return res;
}
exports.default = default_1;
