// lib
import useStore from "@/store";

// components
import ContentBlock from "@/components/common/ContentBlock";
import Social from "@/components/common/Social";

export default function Contact() {
    const { contact, social } = useStore(({ contact, social }) => ({
        contact: contact?.data?.attributes ?? {},
        social,
    }));
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
                <Social fields={social} />
            </ContentBlock>
        </>
    );
}
