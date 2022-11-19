import type { Color, Bgc, Type } from './config';
export declare type LogExpandValue = Color | Bgc | Type | 'reset';
export declare const logEx: (params: LogExpandValue[], t?: string) => string;
