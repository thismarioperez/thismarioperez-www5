import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";

export default function TextMesh({
    children,
    debug,
    font,
    fontSize = 0.5,
    ...rest
}) {
    const kerningFactor = 0.15;
    const letterSpacing = -fontSize * kerningFactor;
    const letters = children.split("");
    const x = (letters.length - letters.length * kerningFactor) / -2;
    const textProps = {
        fontSize,
        font,
        letterSpacing,
    };
    const meshRef = useRef(null);

    {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        debug ? useHelper(meshRef, BoxHelper, "blue") : null;
    }

    useFrame(() => {
        if (meshRef.current) {
            // meshRef.current.rotation.y += 0.01;
            // meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
        }
    });

    return (
        <group ref={meshRef} {...rest}>
            <Text3D  position={[x, 0, 0]} {...textProps}>
                <meshLambertMaterial color={0xffffff}/>
                {children}
            </Text3D>
        </group>
    );
}
