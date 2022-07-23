import config from '../config';
import { Type } from '../config';
import { Result, Callback } from './types';

const values = config.type;

export default function(t: any = '', type: Type, cb?: Callback): Result {
    const ty = values[type] ?? config.reset;
    process.stdout.write(ty);
    console.log(t);
    process.stdout.write(config.reset);
    const res = {
        content: t,
        type: 'text',
        value: type
    };
    cb && cb(res);
    return res;
};
