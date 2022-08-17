import produce from "immer";

const NAMESPACE = "global";

const initialState = {
    contact: {
        fields: {
            email: "",
            phone: {
                areaCode: "",
                phoneNumber: "",
            },
        },
    },
    social: {
        githubUrl: "",
        instagramUrl: "",
        linkedinUrl: "",
        twitterUrl: "",
    },
    headerOffset: 0,
};

const createGlobal = (set, get) => ({
    [NAMESPACE]: {
        ...initialState,
    },
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
});

export default createGlobal;