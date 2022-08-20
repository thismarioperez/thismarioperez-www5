import produce from "immer";

const NAMESPACE = "global";

const initialState = {
    headerOffset: 0,
    isMenuOpen: false,
};

const createGlobal = (set, get) => ({
    [NAMESPACE]: {
        ...initialState,
        openMenu: () =>
            set(
                produce((state) => {
                    state[NAMESPACE].isMenuOpen = true;
                })
            ),
        closeMenu: () =>
            set(
                produce((state) => {
                    state[NAMESPACE].isMenuOpen = false;
                })
            ),
        setContact: (value) =>
            set(
                produce((state) => {
                    state[NAMESPACE].contact = value;
                })
            ),
        setSocial: (value) =>
            set(
                produce((state) => {
                    state[NAMESPACE].social = value;
                })
            ),
        setHeaderOffset: (value) =>
            set(
                produce((state) => {
                    state[NAMESPACE].headerOffset = value;
                })
            ),
    },
});

export default createGlobal;
