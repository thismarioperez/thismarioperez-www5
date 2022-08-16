// styles
import styles from "./Social.module.scss";

// lib
import PropTypes from "prop-types";

// Components
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialPropTypes = {
    fields: PropTypes.shape({
        githubUrl: PropTypes.string,
        instagramUrl: PropTypes.string,
        linkedinUrl: PropTypes.string,
        twitterUrl: PropTypes.string,
    }),
};

function Social({
    fields = {
        githubUrl: "",
        instagramUrl: "",
        linkedinUrl: "",
        twitterUrl: "",
    },
}) {
    const socials = Object.keys(fields).map((key) => ({
        type: `${key.replace("Url", "")}`,
        url: fields[key],
    }));
    return (
        <ul className={styles.social}>
            {socials.map(({ type, url }, i) => (
                <li key={i} className={styles["social__item"]}>
                    <a
                        className={styles["social__link"]}
                        href={url}
                        target="_blank"
                    >
                        {type === "github" && <FaGithub />}
                        {type === "linkedin" && <FaLinkedin />}
                        {type === "twitter" && <FaTwitter />}
                        {type === "instagram" && <FaInstagram />}
                    </a>
                </li>
            ))}
        </ul>
    );
}

Social.propTypes = socialPropTypes;

export default Social;
