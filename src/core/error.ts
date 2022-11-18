import { color as values, reset } from '../config';
import { Result, Callback } from './types';

export const error = (t: any = '', cb?: Callback): Result => {
    process.stdout.write(values.red);
    console.log(t);
    process.stdout.write(reset);
    const res = {
        content: t,
        type: 'error',
        value: 'red'
    };
    cb && cb(res);
    return res;
};
