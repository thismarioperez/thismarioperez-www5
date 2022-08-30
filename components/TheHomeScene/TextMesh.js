import durations from "@/styles/exports/durations.module.scss";

import { forwardRef } from "react";
import { Text3D, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BoxHelper, MathUtils } from "three";
import useBreakpoints from "@/hooks/useBreakpoints";
import { gsap } from "@/lib/gsap";
import { parseInt } from "lodash";

const TextMesh = (
    { children, debug, font, fontSize = 0.5, position, ...rest },
    ref
) => {
    const kerningFactor = 0.15;
    const letterSpacing = -fontSize * kerningFactor;
    const letters = children.split("");
    const x = (letters.length - letters.length * kerningFactor) / -2;
    const textProps = {
        fontSize,
        font,
        letterSpacing,
    };

    {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        debug ? useHelper(ref, BoxHelper, "blue") : null;
    }

    const { medium } = useBreakpoints();

    useFrame(() => {
        if (ref.current) {
            gsap.to(ref.current.position, {
                x: medium ? position[0] : position[0] - 1,
                ease: "ease",
                duration: parseInt(durations["2"]) * 0.001,
            });
        }
    });

    return (
        <group ref={ref} position={position} {...rest}>
            <Text3D position={[x, 0, 0]} {...textProps}>
                <meshPhongMaterial color={0xffffff} />
                {children}
            </Text3D>
        </group>
    );
};

export default forwardRef(TextMesh);
