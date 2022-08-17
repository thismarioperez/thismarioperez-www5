// lib
import { shallow } from "immer";
import useStore from "@/store";

// components
import ContentBlock from "@/components/common/ContentBlock";
import Social from "@/components/common/Social";

const DEFAULTS = {
    phone: null,
    email: null,
};

export default function Contact() {
    const { contact } = useStore(({ contact }) => ({
        contact: contact ?? DEFAULTS,
    }), shallow);
    const { email, phone } = contact;

    return (
        <>
            {email && (
                <ContentBlock>
                    <p>
                        email: <a href={`mailto:${email}`}>{email}</a>
                    </p>
                </ContentBlock>
            )}
            {phone && (
                <ContentBlock>
                    <p>
                        phone: <a href={`tel:1${phone}`}>{phone}</a>
                    </p>
                </ContentBlock>
            )}
            <ContentBlock>
                <Social />
            </ContentBlock>
        </>
    );
}
