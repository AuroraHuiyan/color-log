import { type as values, reset } from '../config';
import { Type } from '../config';
import { Result, Callback } from './types';

export const text = (t: any = '', type: Type, cb?: Callback): Result => {
    const ty = values[type] ?? reset;
    process.stdout.write(ty);
    console.log(t);
    process.stdout.write(reset);
    const res = {
        content: t,
        type: 'text',
        value: type
    };
    cb && cb(res);
    return res;
};
