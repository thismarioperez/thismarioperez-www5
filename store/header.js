import produce from "immer";

const NAMESPACE = "header";

const initialState = {
    offset: 0,
};

const createHeader = (set, get) => ({
    [NAMESPACE]: {
        ...initialState,
        fetchHeader: async () => {
            const res = await getHeader();
            let _data = {};
            if (res.header?.data && Object.keys(res.header.data).length > 0) {
                _data = res.header.data;
            }
            set(
                produce((state) => {
                    state[NAMESPACE].data = _data;
                })
            );
        },
        setOffset: (value) =>
            set(
                produce((state) => {
                    state[NAMESPACE].offset = value;
                })
            ),
    },
});

export default createHeader;
