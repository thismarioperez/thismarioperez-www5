import apiData from "@/lib/contact.preval";
import { getContact } from "@/lib/api";
import produce from "immer";

const NAMESPACE = "contact";

let data = [];

if (apiData.contact?.data) {
    data = apiData.contact.data;
}

const initialState = {
    data,
};

const createContact = (set, get) => ({
    [NAMESPACE]: {
        ...initialState,
    },
    fetchContact: async () => {
        const res = await getContact();
        let _data = [];
        if (res.contact?.data?.length > 0) {
            _data = res.contact.data;
        }
        set(
            produce((state) => {
                state[NAMESPACE].data = _data;
            })
        );
    },
});

export default createContact;
