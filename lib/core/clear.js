"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = void 0;
var config_1 = require("../config");
var clear = function (cb) {
    console.log(config_1.reset);
    console.clear();
    var res = {
        type: 'clear'
    };
    cb && cb(res);
    return res;
};
exports.clear = clear;
