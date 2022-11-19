"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logExpand = void 0;
var config_1 = require("./config");
exports.logExpand = {
    ex: function (params, t) {
        return params.map(function (v) { return v === 'reset' ? config_1.reset : config_1.color[v] || config_1.bgc[v] || config_1.type[v] || v; }).join('')
            + t
            + config_1.reset;
    }
};
