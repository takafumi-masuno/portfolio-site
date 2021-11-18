import { Box, Text } from "rebass";
import { StyledBox } from "./Home";

const About = () => {
  return (
    <>
      <Box p={2}>
        <StyledBox p={1}>
          <Text as="h1">ABOUT ME</Text>
        </StyledBox>
        <StyledBox p={1}>
          <Text as="h2">NAME: TAKAFUMI MASUNO</Text>
        </StyledBox>
        <StyledBox p={1} sx={{ as: "h3" }}>
          <Text sx={{ textAlign: "left" }}>
            大阪出身、都内在住
            <br />
            都内でWebエンジニアとして働いています。
            <br />
            現在業務で使用している言語・フレームワークは、TypeScript・Reactです。
          </Text>
        </StyledBox>
      </Box>
    </>
  );
};

export default About;
