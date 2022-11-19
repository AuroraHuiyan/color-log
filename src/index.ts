import { log } from './core/log';
import { info } from './core/info';
import { success } from './core/success';
import { warn } from './core/warn';
import { error } from './core/error';
import { banner } from './core/banner';
import { text } from './core/text';
import { clear } from './core/clear';

const test = (): void => {
    log('This is the log print.');
    info('This is the info print.');
    success('This is the success print.');
    warn('This is the warn print.');
    error('This is the error print.');
    banner('This is the banner print.', 'red');
    text('This is the text print.', ['underline', 'bright']);
};

export { Color, Bgc, Type } from './config';
export { Result, Callback } from './core/types';
export { logEx } from './utils/logEx';
export const colorlog = {
    log,
    info,
    success,
    warn,
    error,
    banner,
    text,
    clear,
    test
};
