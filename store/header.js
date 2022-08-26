import apiData from "@/lib/header.preval";
import { getHeader } from "@/lib/api";
import produce from "immer";

const NAMESPACE = "header";

let data = {};

if (apiData.header?.data && Object.keys(apiData.header.data).length > 0) {
    data = apiData.header.data;
}

const initialState = {
    data,
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
    },
});

export default createHeader;