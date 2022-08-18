// lib
import { getPageBySlug } from "@/lib/api";
import { log } from "@/scripts/core";
import { constants } from "@/scripts/core";

// components
import Meta from "@/components/common/Meta";
import Blocks from "@/components/blocks";

export default function Home({ data }) {
    log("log", "Home Page Data:", data);
    const {
        attributes: { blocks, title },
    } = data;
    return (
        <>
            <Meta>
                <title>{`${constants.SITE_NAME} | ${title}`}</title>
            </Meta>
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
