export type Result = {
    content: string,
    type: string,
    value?: string
};

export type Callback = (options: Result) => unknown;