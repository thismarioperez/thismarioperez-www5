import apiData from "@/lib/contact.preval";
import { getContact } from "@/lib/api";
import produce from "immer";

const NAMESPACE = "contact";

let data = {};

if (apiData.contact?.data?.attributes) {
    data = apiData.contact.data.attributes;
}

const initialState = {
    ...data,
};

const createContact = (set, get) => ({
    [NAMESPACE]: {
        ...initialState,
        fetchContact: async () => {
            const res = await getContact();
            let _data = {};
            if (
                res.contact?.data?.attributes &&
                Object.keys(res.contact.data.attributes).length > 0
            ) {
                _data = res.contact.data.attributes;
            }
            set(
                produce((state) => {
                    state[NAMESPACE] = _data;
                })
            );
        },
    },
});

export default createContact;
