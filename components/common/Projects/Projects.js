// styles
import styles from "./Projects.module.scss";

// lib
import PropTypes from "prop-types";
import cx from "classnames";

// components
import Blocks from "@/components/_blocks";
import ContentWrapper from "@/components/ContentWrapper";

const ProjectPropTypes = {
    allProjects: PropTypes.shape({
        edges: PropTypes.arrayOf(
            PropTypes.shape({
                node: PropTypes.shape({
                    blocks: PropTypes.array,
                    id: PropTypes.string,
                    postFields: PropTypes.shape({
                        externalUrl: PropTypes.string,
                    }),
                    title: PropTypes.string,
                }),
            })
        ),
    }).isRequired,
};

function Projects({ allProjects }) {
    const projects = allProjects.edges.map((edge) => {
        const {
            node: { blocks, id, postFields, title },
        } = edge;
        return {
            blocks,
            id,
            postFields,
            title,
        };
    });
    return (
        <>
            <ContentWrapper>
                <h1>Projects</h1>
            </ContentWrapper>
            {projects.length > 0 &&
                projects.map(({ blocks, id, postFields, title }, i) => {
                    const { externalUrl = null } = postFields;
                    return (
                        <article
                            className={styles.project}
                            key={id}
                        >
                            <ContentWrapper>
                                <h3>
                                    {externalUrl ? (
                                        <a href={externalUrl} target="_blank">
                                            {title}
                                        </a>
                                    ) : (
                                        title
                                    )}
                                </h3>
                            </ContentWrapper>
                            <Blocks key={id} blocks={blocks} />
                        </article>
                    );
                })}
        </>
    );
}

Projects.propTypes = ProjectPropTypes;

export default Projects;
