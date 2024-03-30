export type TableColumn<T> = {
    attribute: keyof T;
    label: string;
}
