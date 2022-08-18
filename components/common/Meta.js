import Head from "next/head";

export default function Meta({ children }) {
    return (
        <Head>
            <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
            <link rel="icon" type="image/png" href="/favicon/favicon.png" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta name="description" content={`thismarioperez`} />
            {children}
        </Head>
    );
}
