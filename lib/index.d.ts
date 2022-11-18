export { Color, Bgc, Type } from './config';
export { Result, Callback } from './core/types';
export declare const colorlog: {
    log: (t?: any, cb?: import("./core/types").Callback | undefined) => import("./core/types").Result;
    info: (t?: any, cb?: import("./core/types").Callback | undefined) => import("./core/types").Result;
    success: (t?: any, cb?: import("./core/types").Callback | undefined) => import("./core/types").Result;
    warn: (t?: any, cb?: import("./core/types").Callback | undefined) => import("./core/types").Result;
    error: (t?: any, cb?: import("./core/types").Callback | undefined) => import("./core/types").Result;
    banner: (t: any, color: import("./config").Color, cb?: import("./core/types").Callback | undefined) => import("./core/types").Result;
    text: (t: any, type: import("./config").Type, cb?: import("./core/types").Callback | undefined) => import("./core/types").Result;
    test: () => void;
};
