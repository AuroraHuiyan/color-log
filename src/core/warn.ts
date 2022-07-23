import config from '../config';
import { Result, Callback } from './types';

const values = config.color;

export default function(t: any = '', cb?: Callback): Result {
    process.stdout.write(values.yellow);
    console.log(t);
    process.stdout.write(config.reset);
    const res = {
        content: t,
        type: 'warn',
        value: 'yellow'
    };
    cb && cb(res);
    return res;
}