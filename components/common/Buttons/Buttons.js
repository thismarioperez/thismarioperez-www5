import styles from "./Buttons.module.scss";

import Button from "@/components/common/Button";

export default function Buttons({ buttons = [] }) {
    const _buttons = buttons.map(({ color, ...button }) => {
        let as = "button";
        if (button.href?.length > 0) {
            as = "a";
        }
        return {
            ...button,
            as,
            color: color.value,
        };
    });

    return (
        <div className={styles.wrapper}>
            {_buttons.map((button, i) => {
                return (
                    <Button key={i} {...button}>
                        {button.label}
                    </Button>
                );
            })}
        </div>
    );
}
