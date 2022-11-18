import { color as values, reset } from '../config';
import { Result, Callback } from "./types";

export const info = (t: any = '', cb?: Callback): Result => {
    process.stdout.write(values.blue);
    console.log(t);
    process.stdout.write(reset);
    const res = {
        content: t,
        type: 'info',
        value: 'blue'
    };
    cb && cb(res);
    return res;
};
