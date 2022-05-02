"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = __importDefault(require("./index.js"));
index_js_1.default.log('This is the log print.');
index_js_1.default.info('This is the info print.');
index_js_1.default.success('This is the success print.');
index_js_1.default.warn('This is the warn print.');
index_js_1.default.error('This is the error print.');
index_js_1.default.banner('This is the banner print.', 'red');
index_js_1.default.text('This is the text print.', 'underscore');
