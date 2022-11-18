import { color as values, reset } from '../config';
import { Result, Callback } from "./types";

export const log = (t: any = '', cb?: Callback): Result => {
    process.stdout.write(values.white);
    console.log(t);
    process.stdout.write(reset);
    const res = {
        content: t,
        type: 'log',
        value: 'white'
    };
    cb && cb(res);
    return res;
};
