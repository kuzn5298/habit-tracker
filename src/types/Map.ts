export type MapObject<K extends string | number | symbol, V> = {
    [key in K]: V;
};
