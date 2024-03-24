type LocalStorage = {
    [key: string]: string;
};

const store: LocalStorage =
    typeof localStorage === 'object' ? localStorage : {};

type Storage = {
    set(key: string, value: unknown): void;
    get(key: string): unknown;
    remove(key: string): void;
};

const storage: Storage = {
    set(key, value) {
        const serialize = JSON.stringify(value);
        store[key] = serialize;
    },
    get(key) {
        if (!store[key]) return null;
        const value = store[key];
        try {
            const deserialize = JSON.parse(value);
            return deserialize;
        } catch (e) {
            return value;
        }
    },
    remove(key) {
        delete store[key];
    },
};

export default storage;
