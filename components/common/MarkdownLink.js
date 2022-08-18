import isExternalLink from "@/scripts/util/isExternalLink";

import Link from "next/link";
import ConditionalWrapper from "./ConditionalWrapper";

export default function MarkdownLink({ children, href }) {
    const isExternal = isExternalLink(href);
    const aProps = isExternal ? {
        href,
        rel: 'noreferrer',
        target: "_blank",
    } : {};
    return (
        <ConditionalWrapper
            condition={!isExternal}
            wrapper={(children) => <Link href={href}>{children}</Link>}
        >
            <a {...aProps}>
                {children}
            </a>
        </ConditionalWrapper>
    );
}
