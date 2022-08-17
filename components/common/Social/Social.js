// styles
import styles from "./Social.module.scss";

// lib
import useStore from "@/store";

// Components
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const DEFAULTS = {
    github: "",
    instagram: "",
    linkedin: "",
    twitter: "",
};

function Social() {
    const { socials } = useStore(({ contact }) => ({
        socials: contact?.socials ?? DEFAULTS,
    }));
    const _socials = Object.keys(socials).map((key) => ({
        type: key,
        url: socials[key],
    }));
    return (
        <ul className={styles.social}>
            {_socials.map(({ type, url }, i) => (
                <li key={i} className={styles["social__item"]}>
                    <a
                        className={styles["social__link"]}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
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

export default Social;
