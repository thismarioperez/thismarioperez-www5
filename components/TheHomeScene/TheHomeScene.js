import styles from "./TheHomeScene.module.scss";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stats, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";

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
                    <OrbitControls object={meshRef} />
                    <Camera
                        debug={debug}
                        position={[2, 2, 4.5]}
                        makeDefault={true}
                    />
                    <Lighting debug={debug} />
                    <Stars />
                    <Suspense fallback={null}>
                        <Float
                            floatingRange={[undefined, 0.5]}
                            rotation={[0, Math.PI / -0.25, 0]}
                            position={[1, -0.75, 0]}
                            speed={2}
                        >
                            <TextMesh
                                ref={meshRef}
                                font="/fonts/Prestige Elite Std_Bold.json"
                                scale={2}
                                debug={debug}
                            >
                                {"M"}
                            </TextMesh>
                        </Float>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
