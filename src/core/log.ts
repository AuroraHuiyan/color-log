import { color as values, reset } from '../config';
import { Result, Callback } from "./types";

export const log = (t: any = '', cb?: Callback): Result => {
    console.log(values.white + t + reset);
    const res: Result = {
        type: 'log',
        content: t,
        value: 'white'
    };
    cb && cb(res);
    return res;
};
