import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

const DrawCanvas = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas>
        <PerspectiveCamera />
      </Canvas>
    </Suspense>
  );
};

export default DrawCanvas;
