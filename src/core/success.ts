import { color as values, reset } from '../config';
import { Result, Callback } from './types';

export const success = (t: any = '', cb?: Callback): Result => {
    console.log(values.green + t + reset);
    const res: Result = {
        type: 'success',
        content: t,
        value: 'green'
    };
    cb && cb(res);
    return res;
};
