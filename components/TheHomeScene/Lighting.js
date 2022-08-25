import { SpotLight, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { SpotLightHelper } from "three";
import { useEffect, useRef } from "react";

export default function Lighting({ debug }) {
    const ref = useRef(null);

    {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        debug ? useHelper(ref, SpotLightHelper) : null;
    }

    return (
        <>
            <ambientLight color={0xfefefe} intensity={0.25} />
            <SpotLight ref={ref} angle={Math.PI / 2} color={0xffffff} intensity={10} decay={.5} position={[-0.5, 4, 4]}/>
        </>
    );
}
