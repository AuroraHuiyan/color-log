import config from '../config.js';
import { Color, Bgc } from '../config.js';
import { Result, Callback } from './types.js';

const values = config.bgc;

export default function(t: string, color: Color, cb?: Callback): Result {
    const bgc: Bgc = ('bg' + color.slice(0, 1).toUpperCase() + color.slice(1).toLowerCase()) as Bgc;
    const bg = values[bgc] ?? config.reset;
    process.stdout.write(bg);
    console.log(t);
    process.stdout.write(config.reset);
    const res = {
        content: t,
        type: 'banner',
        value: color
    };
    cb && cb(res);
    return res;
}
