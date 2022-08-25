// lib
import { getPageBySlug } from "@/lib/api";
import { log } from "@/scripts/core";
import { constants } from "@/scripts/core";

// components
import Meta from "@/components/common/Meta";
import TheHomeScene from "@/components/TheHomeScene";

export default function Home({ data }) {
    log("log", "Home Page Data:", data);
    const {
        attributes: { title },
    } = data;
    return (
        <>
            <Meta>
                <title>{`${constants.SITE_NAME} | ${title}`}</title>
            </Meta>
            <TheHomeScene text="M"/>
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
