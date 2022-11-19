import type { Color, Bgc, Type } from './config';
export declare type LogPrefixValue = Color | Bgc | Type | 'reset';
export declare const logPrefix: {
    ex: (params: LogPrefixValue[]) => string;
};
