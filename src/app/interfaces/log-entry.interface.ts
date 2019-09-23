export interface LogEntryInterface {
    id: number;
    loggedDate: string;
    author: string;
    isInternal: boolean;
    nodeName?: string,
    node?: number;
    message: string;
    category: string;
}

export interface LogEntryFilterInterface {
    id?: number;
    loggedDateFrom?: string;
    loggedDateTo?: string;
    author?: string;
    isInternal?: boolean;
    nodeName?: string,
    message?: string;
    category?: string;
}