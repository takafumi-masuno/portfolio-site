import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Box, Text } from "rebass";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { StyledBox } from "../Home";
import Image01 from "../../images/img_01.jpg";

const MyMesh = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.02;
  });

  return <mesh ref={ref} {...props} />;
};

const TrialThreeJs = () => {
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const Texture = useLoader(TextureLoader, Image01);

  return (
    <Box>
      <StyledBox p={1}>
        <Text as="h1">React Three Fiberのお試し</Text>
      </StyledBox>
      <Box
        sx={{
          textAlign: "center",
          width: "50%",
          height: "600px",
          backgroundImage: "dimgray",
          margin: "0 auto",
        }}
        id="canvas-container"
      >
        <Canvas>
          <MyMesh
            rotation={[45, 45, 45]}
            scale={clicked ? 3 : 1.5}
            onClick={() => click(!clicked)}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
          >
            <boxGeometry />
            <meshBasicMaterial
              color={hovered ? "#CC9933" : "skyblue"}
              reflectivity={hovered ? 1 : 0}
              map={Texture}
            />
            <ambientLight color="white" />
          </MyMesh>
        </Canvas>
      </Box>
    </Box>
  );
};

export default TrialThreeJs;
