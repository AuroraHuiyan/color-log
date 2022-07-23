"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config"));
var values = config_1.default.type;
function default_1(t, type, cb) {
    var _a;
    if (t === void 0) { t = ''; }
    var ty = (_a = values[type]) !== null && _a !== void 0 ? _a : config_1.default.reset;
    process.stdout.write(ty);
    console.log(t);
    process.stdout.write(config_1.default.reset);
    var res = {
        content: t,
        type: 'text',
        value: type
    };
    cb && cb(res);
    return res;
}
exports.default = default_1;
;
