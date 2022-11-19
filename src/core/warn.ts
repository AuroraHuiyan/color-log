import { color as values, reset } from '../config';
import { Result, Callback } from './types';

export const warn = (t: any = '', cb?: Callback): Result => {
    console.log(values.yellow + t + reset);
    const res: Result = {
        type: 'warn',
        content: t,
        value: 'yellow'
    };
    cb && cb(res);
    return res;
};
