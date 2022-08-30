import isExternalLink from "@/scripts/util/isExternalLink";

import Link from "next/link";
import ConditionalWrapper from "./ConditionalWrapper";

export default function CmsLink({ children, href, ...rest }) {
    const isExternal = isExternalLink(href);
    const aProps = isExternal
        ? {
              href,
              rel: "noreferrer",
              target: "_blank",
              ...rest,
          }
        : { ...rest };
    return (
        <ConditionalWrapper
            condition={!isExternal}
            wrapper={(children) => <Link href={href}>{children}</Link>}
        >
            <a {...aProps}>{children}</a>
        </ConditionalWrapper>
    );
}
