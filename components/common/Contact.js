// lib
import shallow from "zustand/shallow";
import useStore from "@/store";

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
        <div>
            {email && (
                <p>
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
            )}
            {phone && (
                <p>
                    <a href={`tel:1${phone}`}>{phone}</a>
                </p>
            )}
        </div>
    );
}
