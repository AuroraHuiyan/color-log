export declare type ConsoleType = 'log' | 'info' | 'success' | 'warn' | 'error' | 'banner' | 'text' | 'clear';
export declare type Result = {
    type: ConsoleType;
    content?: string;
    value?: string;
};
export declare type Callback = (options: Result) => unknown;
