import apiData from "@/lib/navigations.preval";
import { getAllNavigations } from "@/lib/api";
import produce from "immer";

const NAMESPACE = "navigations";

let data = [];

if (apiData.navigations?.data?.length > 0) {
    data = apiData.navigations.data;
}

const initialState = {
    data,
};

const createNavigations = (set, get) => ({
    [NAMESPACE]: {
        ...initialState,
    },
    fetchNavigations: async () => {
        const res = await getAllNavigations();
        let _data = [];
        if (res.navigations?.data?.length > 0) {
            _data = res.navigations.data;
        }
        set(
            produce((state) => {
                state[NAMESPACE].data = _data;
            })
        );
    },
});

export default createNavigations;
