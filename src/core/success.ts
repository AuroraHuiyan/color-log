import { color as values, reset } from '../config';
import { Result, Callback } from './types';

export const success = (t: any = '', cb?: Callback): Result => {
    process.stdout.write(values.green);
    console.log(t);
    process.stdout.write(reset);
    const res: Result = {
        content: t,
        type: 'success',
        value: 'green'
    };
    cb && cb(res);
    return res;
};
