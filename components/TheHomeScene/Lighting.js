import { SpotLight, useHelper } from "@react-three/drei";
import { SpotLightHelper, PointLightHelper } from "three";
import { useRef } from "react";

export default function Lighting({ debug }) {
    const spotlightRef = useRef(null);
    const pointlightRef = useRef(null);

    {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        debug ? useHelper(spotlightRef, SpotLightHelper) : null;
    }
    {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        debug ? useHelper(pointlightRef, PointLightHelper) : null;
    }

    return (
        <>
            <ambientLight color={0xfefefe} intensity={0.1} />
            <pointLight
                ref={pointlightRef}
                position={[1, 0, -4]}
                intensity={0.1}
                color={0xfdfdfd}
            />
            <SpotLight
                ref={spotlightRef}
                angle={Math.PI / 4}
                color={0xffffff}
                intensity={.2}
                position={[0.5, 4, 4]}
                distance={100}
            />
        </>
    );
}
