// lib
import { BLOCK_TYPE } from "@/scripts/core/constants";

// components
import Hero from "./Hero";
import Interior from "./Interior";
import ProjectsList from "./ProjectsList";

const Components = {
    [BLOCK_TYPE.HERO]: Hero,
    [BLOCK_TYPE.INTERIOR]: Interior,
    [BLOCK_TYPE.PROJECTS_LIST]: ProjectsList,
};

function Block({ __typename, ...rest }) {
    const Component = Components[__typename];

    return <Component {...rest} data-block-type={__typename} />;
}

export default Block;
