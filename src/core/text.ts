import { type as values, reset } from '../config';
import { Type } from '../config';
import { Result, Callback } from './types';

export const text = (t: any = '', type: Type | Type[], cb?: Callback): Result => {
    const ty = Array.isArray(type)
        ? type.map(v => values[v] ?? '').join('')
        : (values[type] ?? reset);
    console.log(ty + t + reset);
    const res: Result = {
        type: 'text',
        content: t,
        value: Array.isArray(type) ? type.join(',') : type
    };
    cb && cb(res);
    return res;
};
