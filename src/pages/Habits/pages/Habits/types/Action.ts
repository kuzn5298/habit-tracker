export interface Action {
    id: string;
    icon: React.ReactElement;
    onClick?: () => void;
}
