import create from "zustand";
import { devtools } from "zustand/middleware";
import createGlobal from "./global";
import createNavigations from "./navigations";

const createStore = (...args) => ({
    ...createGlobal(...args),
    ...createNavigations(...args),
});

const useStore = create(
    devtools((set, get) => ({
        ...createStore(set, get),
    }))
);

export default useStore;
