import styles from "./TheHomeScene.module.scss";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars, Text3D } from "@react-three/drei";
import { Suspense } from "react";


export default function TheHomeScene({text}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <Canvas>
                    <OrbitControls />
                    <PerspectiveCamera />
                    <Stars>
                    </Stars>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 15, 10]} angle={0.3} />
                    <Suspense fallback={null}>
                        <Text3D font="/fonts/Prestige Elite Std_Bold.json" scale={4}>
                            {text}
                            <meshBasicMaterial color={0xffffff}/>
                        </Text3D>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
