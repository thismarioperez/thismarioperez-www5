// lib
import { getPageBySlug } from "@/lib/api";
import { log } from "@/scripts/core";
import { constants } from "@/scripts/core";

// components
import Head from "next/head";
import Blocks from "@/components/Blocks";

export default function Home({ data }) {
    log("log", "Home Page Data:", data);
    const {
        attributes: { blocks, title },
    } = data;
    return (
        <>
            <Head>
                <title>
                    {constants.SITE_NAME} | {title}
                </title>
            </Head>
            <Blocks blocks={blocks} />
        </>
    );
}

export async function getServerSideProps() {
    const { pages } = await getPageBySlug("home");

    return {
        props: {
            data: pages?.data[0] ?? {},
        },
    };
}
