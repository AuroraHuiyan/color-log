export type ConsoleType = 'log' | 'info' | 'success' | 'warn' | 'error' | 'banner' | 'text' | 'clear';
export type Result = {
    type: ConsoleType,
    content?: string,
    value?: string
};

export type Callback = (options: Result) => unknown;