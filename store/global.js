import produce from "immer";

const NAMESPACE = "global";

const initialState = {
    isMenuOpen: false,
    isLoading: true,
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
        startLoading: () =>
            set(
                produce((state) => {
                    state[NAMESPACE].isLoading = true;
                })
            ),
        finishLoading: () =>
            set(
                produce((state) => {
                    state[NAMESPACE].isLoading = false;
                })
            ),
    },
});

export default createGlobal;
