import log from './core/log';
import info from './core/info';
import success from './core/success';
import warn from './core/warn';
import error from './core/error';
import banner from './core/banner';
import text from './core/text';
export { Color, Bgc, Type } from './config';
export { Result, Callback } from './core/types';
export declare const colorlog: {
    log: typeof log;
    info: typeof info;
    success: typeof success;
    warn: typeof warn;
    error: typeof error;
    banner: typeof banner;
    text: typeof text;
    test: () => void;
};
