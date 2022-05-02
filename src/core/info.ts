import config from "../config.js";
import { Result, Callback } from "./types.js";

const values = config.color;

export default function(t: string, cb?: Callback): Result {
    process.stdout.write(values.blue);
    console.log(t);
    process.stdout.write(config.reset);
    const res = {
        content: t,
        type: 'info',
        value: 'blue'
    };
    cb && cb(res);
    return res;
}