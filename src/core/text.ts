import config from '../config.js';
import { Type } from '../config.js';
import { Result, Callback } from './types.js';

const values = config.type;

export default function(t: string, type: Type, cb?: Callback): Result {
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
