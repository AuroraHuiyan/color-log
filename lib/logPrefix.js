"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPrefix = void 0;
var config_1 = require("./config");
exports.logPrefix = {
    ex: function (params) { return params.map(function (v) { return v === 'reset' ? config_1.reset : config_1.color[v] || config_1.bgc[v] || config_1.type[v] || ''; }).join(''); }
};
