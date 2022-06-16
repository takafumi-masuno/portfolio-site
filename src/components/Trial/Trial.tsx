import { Button } from "@mui/material";
import { Box, Flex, Text } from "rebass";
import { StyledBox } from "../Home";

const Trial = () => {
  return (
    <Box>
      <StyledBox p={1}>
        <Text as="h1">トライアル</Text>
      </StyledBox>
      <StyledBox p={1}>
        試したいライブラリやコードなどを表示するページ
      </StyledBox>
      <Flex sx={{ flexFlow: "column", alignItems: "center" }}>
        <Box my={10}>
          <Button href="trial/1" variant="contained">
            React Three Fiber
          </Button>
        </Box>
        <Box my={10}>
          <Button href="trial/2" variant="contained">
            React Google Map
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Trial;
