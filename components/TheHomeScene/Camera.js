import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, useHelper } from "@react-three/drei";
import { CameraHelper } from "three";
import { useRef } from "react";

export default function Camera({ debug, ...rest }) {
    // useFrame(({camera}) => {
    //     console.log(camera.rotation);
    // })
    const ref = useRef(null);
    {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        debug ? useHelper(ref, CameraHelper) : null;
    }

    return <PerspectiveCamera ref={ref} {...rest} />;
}
