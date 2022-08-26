import create from "zustand";
import { devtools } from "zustand/middleware";
import createContact from "./contact";
import createHeader from "./header";
import createGlobal from "./global";
import createNavigations from "./navigations";

const createStore = (...args) => ({
    ...createContact(...args),
    ...createHeader(...args),
    ...createGlobal(...args),
    ...createNavigations(...args),
});

const useStore = create(
    devtools((set, get) => ({
        ...createStore(set, get),
    }))
);

export default useStore;
