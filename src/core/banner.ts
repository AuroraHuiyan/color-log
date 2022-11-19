import { bgc as values, reset } from '../config';
import type { Color, Bgc } from '../config';
import type { Result, Callback } from './types';

export const banner = (t: any = '', color: Color, cb?: Callback): Result => {
    const bgc: Bgc = ('bg' + color.slice(0, 1).toUpperCase() + color.slice(1).toLowerCase()) as Bgc;
    const bg = values[bgc] ?? reset;
    console.log(bg + t + reset);
    const res: Result = {
        type: 'banner',
        content: t,
        value: color
    };
    cb && cb(res);
    return res;
};
