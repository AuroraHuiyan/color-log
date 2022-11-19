import { color as values, reset } from '../config';
import type { Result, Callback } from './types';

export const error = (t: any = '', cb?: Callback): Result => {
    console.log(values.red + t + reset);
    const res: Result = {
        type: 'error',
        content: t,
        value: 'red'
    };
    cb && cb(res);
    return res;
};
