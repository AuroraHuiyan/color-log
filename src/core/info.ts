import { color as values, reset } from '../config';
import { Result, Callback } from "./types";

export const info = (t: any = '', cb?: Callback): Result => {
    console.log(values.blue + t + reset);
    const res: Result = {
        type: 'info',
        content: t,
        value: 'blue'
    };
    cb && cb(res);
    return res;
};
