import { useEffect, forwardRef } from "react";
import { Text3D, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import useBreakpoints from "@/hooks/useBreakpoints";

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

    useEffect(() => {
        if (ref.current) {
            if (medium) {
                ref.current.position.x = position[0];
            } else {
                ref.current.position.x = position[0] - 1;
            }
            console.log(ref.current);
        }
    }, [medium, ref, position]);

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
