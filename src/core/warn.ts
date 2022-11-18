import { color as values, reset } from '../config';
import { Result, Callback } from './types';

export const warn = (t: any = '', cb?: Callback): Result => {
    process.stdout.write(values.yellow);
    console.log(t);
    process.stdout.write(reset);
    const res = {
        content: t,
        type: 'warn',
        value: 'yellow'
    };
    cb && cb(res);
    return res;
};
