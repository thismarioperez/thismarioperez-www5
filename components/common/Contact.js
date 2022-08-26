// lib
import shallow from 'zustand/shallow';
import useStore from "@/store";

// components
import ContentWrapper from "@/components/common/ContentWrapper";
import Social from "@/components/common/Social";

const DEFAULTS = {
    phone: null,
    email: null,
};

export default function Contact() {
    const { contact } = useStore(
        ({ contact }) => ({
            contact: contact ?? DEFAULTS,
        }),
        shallow
    );
    const { email, phone } = contact;

    return (
        <>
            {email && (
                <p>
                    email: <a href={`mailto:${email}`}>{email}</a>
                </p>
            )}
            {phone && (
                <p>
                    phone: <a href={`tel:1${phone}`}>{phone}</a>
                </p>
            )}

            <Social />
        </>
    );
}
