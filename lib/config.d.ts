export declare type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
export declare type Bgc = 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite';
export declare type Type = 'bright' | 'dim' | 'italic' | 'underline' | 'blink' | 'reverse' | 'hidden' | 'strikethrough';
declare const color: {
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
};
declare const bgc: {
    bgBlack: string;
    bgRed: string;
    bgGreen: string;
    bgYellow: string;
    bgBlue: string;
    bgMagenta: string;
    bgCyan: string;
    bgWhite: string;
};
declare const type: {
    bright: string;
    dim: string;
    italic: string;
    underline: string;
    blink: string;
    reverse: string;
    hidden: string;
    strikethrough: string;
};
declare const reset = "\u001B[0m";
export { color, bgc, type, reset };
