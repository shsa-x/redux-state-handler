interface StoreReturn {
    store: any;
    actions: {
        [key: string]: any;
    };
}
export declare const useStore: () => StoreReturn;
export {};
