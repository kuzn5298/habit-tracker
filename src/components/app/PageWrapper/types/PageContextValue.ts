export interface SubPageValue {
    title?: string;
    description?: string;
    closeButton?: boolean;
}

export interface PageContextValue {
    subPageValue: SubPageValue;
    setSubPageValue: (value: Partial<SubPageValue>) => void;
}
