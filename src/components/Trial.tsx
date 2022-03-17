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
    </Box>
  );
};

export default Trial;
