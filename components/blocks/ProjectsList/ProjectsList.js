// styles
import styles from "./ProjectsList.module.scss";

// lib
import PropTypes from "prop-types";

// components
import Project from "./Project";
import Container from "@/components/common/Container";
import ContentWrapper from "@/components/common/ContentWrapper";

const ProjectsListPropTypes = {
    projects: PropTypes.shape({
        data: PropTypes.array.isRequired,
    }),
};

function ProjectsList({ projects: { data = [] } = {} }) {
    return (
        <div className={styles.wrapper}>
            {data &&
                data.map((project, i) => (
                    <div key={i}>
                        {i > 0 && (
                            <ContentWrapper>
                                <Container>
                                    <hr />
                                </Container>
                            </ContentWrapper>
                        )}
                        <Project {...project.attributes} />
                    </div>
                ))}
        </div>
    );
}

ProjectsList.propTypes = ProjectsListPropTypes;
ProjectsList.defaultProps = {
    projects: {
        data: [],
    },
};

export default ProjectsList;
