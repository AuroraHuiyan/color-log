"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var log_js_1 = __importDefault(require("./core/log.js"));
var info_js_1 = __importDefault(require("./core/info.js"));
var success_js_1 = __importDefault(require("./core/success.js"));
var warn_js_1 = __importDefault(require("./core/warn.js"));
var error_js_1 = __importDefault(require("./core/error.js"));
var banner_js_1 = __importDefault(require("./core/banner.js"));
var text_js_1 = __importDefault(require("./core/text.js"));
module.exports = {
    log: log_js_1.default,
    info: info_js_1.default,
    success: success_js_1.default,
    warn: warn_js_1.default,
    error: error_js_1.default,
    banner: banner_js_1.default,
    text: text_js_1.default
};
