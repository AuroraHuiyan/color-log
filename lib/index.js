"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorlog = void 0;
var log_1 = __importDefault(require("./core/log"));
var info_1 = __importDefault(require("./core/info"));
var success_1 = __importDefault(require("./core/success"));
var warn_1 = __importDefault(require("./core/warn"));
var error_1 = __importDefault(require("./core/error"));
var banner_1 = __importDefault(require("./core/banner"));
var text_1 = __importDefault(require("./core/text"));
var test = function () {
    (0, log_1.default)('This is the log print.');
    (0, info_1.default)('This is the info print.');
    (0, success_1.default)('This is the success print.');
    (0, warn_1.default)('This is the warn print.');
    (0, error_1.default)('This is the error print.');
    (0, banner_1.default)('This is the banner print.', 'red');
    (0, text_1.default)('This is the text print.', 'underscore');
};
exports.colorlog = {
    log: log_1.default,
    info: info_1.default,
    success: success_1.default,
    warn: warn_1.default,
    error: error_1.default,
    banner: banner_1.default,
    text: text_1.default,
    test: test
};
