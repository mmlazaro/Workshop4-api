export interface ListInterface<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}

