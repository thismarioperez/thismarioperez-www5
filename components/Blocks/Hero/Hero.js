// style
import styles from "./Hero.module.scss";

// lib
import cx from "classnames";

// components
import Link from "next/link";
import Buttons from "@/components/common/Buttons";
import ConditionalWrapper from "@/components/common/ConditionalWrapper";

export default function Hero(props) {
    const { buttons, title, subtitle, content, backgroundColor } = props;
    return (
        <section
            className={cx(
                styles.wrapper,
                "-exp--3",
                `-bg--${backgroundColor.value}`
            )}
        >
            {title && <h1>{title}</h1>}
            {subtitle && <h3>{subtitle}</h3>}
            <Buttons buttons={buttons} />
        </section>
    );
}
