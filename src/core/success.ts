import config from '../config';
import { Result, Callback } from './types';

const values = config.color;

export default function(t: any = '', cb?: Callback): Result {
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
