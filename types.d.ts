declare class WordTable {
    constructor(header: any, body: any);

    string(): string
}

declare module 'word-table' {
    export = WordTable
}

