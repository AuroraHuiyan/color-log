import config from '../config.js';
import { Result, Callback } from './types.js';

const values = config.color;

export default function(t: string, cb?: Callback): Result {
    process.stdout.write(values.green);
    console.log(t);
    process.stdout.write(config.reset);
    const res: Result = {
        content: t,
        type: 'success',
        value: 'green'
    };
    cb && cb(res);
    return res;
}
