import { getAllPages, getPageBySlug } from "@/lib/api";
import { log } from "@/scripts/core";
import { constants } from "@/scripts/core";

// components
import Meta from "@/components/common/Meta";
import Blocks from "@/components/blocks";

export default function Page({ data }) {
    const {
        attributes: { blocks, title },
    } = data;
    log("log", `${title} Page Data:`, data);
    return (
        <>
            <Meta>
                <title>{`${constants.SITE_NAME} | ${title}`}</title>
            </Meta>
            <Blocks blocks={blocks} />
        </>
    );
}

export async function getStaticProps({ params }) {
    const { slug } = params
    const { pages } = await getPageBySlug(slug);
    return {
        props: {
            data: pages?.data[0] ?? {},
        },
    };

}

export async function getStaticPaths() {
    const res = await getAllPages();
    const pages = res.pages.data;
    const slugs = pages.map(({ attributes: {slug}}) => slug);
    return {
        paths:
        slugs.map(
                (slug) => `/${slug}`
            ) || [],
        fallback: true,
    };
}
