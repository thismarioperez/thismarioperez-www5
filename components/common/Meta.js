import Head from "next/head";

export default function Meta({ children }) {
    return (
        <Head>
            {children}
        </Head>
    );
}
