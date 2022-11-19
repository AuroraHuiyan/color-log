"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEx = void 0;
var config_1 = require("../config");
var logEx = function (params, t) {
    if (t === void 0) { t = ''; }
    return params.map(function (v) { return v === 'reset' ? config_1.reset : config_1.color[v] || config_1.bgc[v] || config_1.type[v] || v; }).join('') + t + config_1.reset;
};
exports.logEx = logEx;
