import { Canvas } from "@react-three/fiber";
import { Box, Text } from "rebass";
import { StyledBox } from "./Home";

const Trial = () => {
  return (
    <Box>
      <StyledBox p={1}>
        <Text as="h1">トライアル</Text>
      </StyledBox>
      <StyledBox p={1}>
        試したいライブラリやコードなどを表示するページ
      </StyledBox>
      <Box
        sx={{ textAlign: "center", width: "95%", height: "600px" }}
        id="canvas-container"
      >
        <Canvas>
          <mesh rotation={[45, 45, 45]} scale={3}>
            <boxGeometry />
            <meshBasicMaterial color="skyblue" />
            <ambientLight color="white" />
          </mesh>
        </Canvas>
      </Box>
    </Box>
  );
};

export default Trial;
