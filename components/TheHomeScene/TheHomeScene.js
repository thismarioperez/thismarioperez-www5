import styles from "./TheHomeScene.module.scss";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from "react";

import Lighting from "./Lighting";
import Camera from "./Camera";
import TextMesh from "./TextMesh";

export default function TheHomeScene() {
    const debug = false;

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <Canvas>
                    {debug ? <Stats /> : null}
                    {debug ? <axesHelper args={[2]} /> : null}
                    {debug ? <gridHelper args={[20, 20]} /> : null}
                    {debug ? <OrbitControls /> : null}
                    {/* <Camera debug={debug} position={[2, 2, 4]} makeDefault/> */}
                    <Camera debug={debug} position={[0, 0, 4]} makeDefault/>
                    <Lighting debug={debug} />
                    <Suspense fallback={null}>
                        <Float>
                            <TextMesh
                                font="/fonts/Prestige Elite Std_Bold.json"
                                scale={2}
                                debug={debug}
                                position={[1, -0.5, 0]}
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
