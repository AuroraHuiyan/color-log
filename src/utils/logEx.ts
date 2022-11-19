import type { Color, Bgc, Type } from '../config';
import { color, bgc, type, reset } from '../config';

export type LogExpandValue = Color | Bgc | Type | 'reset';

export const logEx = (params: LogExpandValue[], t: string = ''): string =>
        params.map((v: LogExpandValue) => v === 'reset' ? reset : color[v as Color] || bgc[v as Bgc] || type[v as Type] || v).join('') + t + reset;
