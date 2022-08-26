import { forwardRef } from "react";
import { Text3D, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";

const TextMesh = ({ children, debug, font, fontSize = 0.5, ...rest }, ref) => {
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

    return (
        <group ref={ref} {...rest}>
            <Text3D position={[x, 0, 0]} {...textProps}>
                <meshPhongMaterial color={0xffffff}/>
                {children}
            </Text3D>
        </group>
    );
};

export default forwardRef(TextMesh);
