import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "@/scripts/core/constants";

export default function Meta({ children }) {
    return (
        <Head>
            <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
            <link rel="icon" type="image/png" href="/favicon/favicon.png" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta name="description" content={`thismarioperez`} />
            <meta property="og:image" content={HOME_OG_IMAGE_URL} />
            {children}
        </Head>
    );
}
