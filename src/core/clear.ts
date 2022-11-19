import { reset } from '../config';
import { Result, Callback } from './types';

export const clear = (cb?: Callback): Result => {
    console.log(reset);
    console.clear();
    const res: Result = {
        type: 'clear'
    };
    cb && cb(res);
    return res;
};
