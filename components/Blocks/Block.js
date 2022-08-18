// lib
import { BLOCK_TYPE } from "@/scripts/core/constants";
import useStore from "@/store";
import { shallow } from "immer";

// components
import ContentBlock from "@/components/common/ContentBlock";
import Hero from "./Hero/Hero";
import Interior from "./Interior";
import ProjectsList from "./ProjectsList";

const Components = {
    [BLOCK_TYPE.HERO]: Hero,
    [BLOCK_TYPE.INTERIOR]: Interior,
    [BLOCK_TYPE.PROJECTS_LIST]: ProjectsList,
};

function Block(props) {
    const { __typename, offset } = props;
    const Component = Components[__typename];
    const headerOffset = useStore(
        ({ global: { headerOffset } }) => headerOffset,
        shallow
    );
    const style = offset
        ? {
              paddingTop: `${headerOffset}px`,
          }
        : {};
    return (
        <ContentBlock style={style}>
            <Component {...props} />
        </ContentBlock>
    );
}

export default Block;
