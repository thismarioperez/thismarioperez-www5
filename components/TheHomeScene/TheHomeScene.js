// style
import styles from "./TheHomeScene.module.scss";

// lib
import { Canvas } from "@react-three/fiber";
import {
    Float,
    OrbitControls,
    PresentationControls,
    Stats,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

// components
import Lighting from "./Lighting";
import Camera from "./Camera";
import TextMesh from "./TextMesh";

export default function TheHomeScene() {
    const debug = false;
    const meshRef = useRef(null);

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <Canvas>
                    {debug ? <Stats /> : null}
                    {debug ? <axesHelper args={[2]} /> : null}
                    {debug ? <gridHelper args={[20, 20]} /> : null}
                    <OrbitControls
                        enableDamping={debug}
                        enablePan={debug}
                        enableRotate={debug}
                        enableZoom={debug}
                        reverseOrbit={debug}
                    />
                    <Camera
                        debug={debug}
                        position={[1, 2, 5]}
                        makeDefault={true}
                    />
                    <Lighting debug={debug} />
                    <Suspense fallback={null}>
                        <PresentationControls snap={true}>
                            <Float floatingRange={[undefined, 0.5]} speed={2}>
                                <group>
                                    <TextMesh
                                        ref={meshRef}
                                        font="/fonts/Prestige Elite Std_Bold.json"
                                        scale={2}
                                        rotation={[0, -0.2, 0]}
                                        position={[1.2, -0.75, 0]}
                                        debug={debug}
                                    >
                                        {"M"}
                                    </TextMesh>
                                </group>
                            </Float>
                        </PresentationControls>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
