"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorlog = exports.logEx = void 0;
var log_1 = require("./core/log");
var info_1 = require("./core/info");
var success_1 = require("./core/success");
var warn_1 = require("./core/warn");
var error_1 = require("./core/error");
var banner_1 = require("./core/banner");
var text_1 = require("./core/text");
var clear_1 = require("./core/clear");
var test = function () {
    (0, log_1.log)('This is the log print.');
    (0, info_1.info)('This is the info print.');
    (0, success_1.success)('This is the success print.');
    (0, warn_1.warn)('This is the warn print.');
    (0, error_1.error)('This is the error print.');
    (0, banner_1.banner)('This is the banner print.', 'red');
    (0, text_1.text)('This is the text print.', ['underline', 'bright']);
};
var logEx_1 = require("./utils/logEx");
Object.defineProperty(exports, "logEx", { enumerable: true, get: function () { return logEx_1.logEx; } });
exports.colorlog = {
    log: log_1.log,
    info: info_1.info,
    success: success_1.success,
    warn: warn_1.warn,
    error: error_1.error,
    banner: banner_1.banner,
    text: text_1.text,
    clear: clear_1.clear,
    test: test
};
