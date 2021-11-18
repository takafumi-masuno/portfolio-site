import { Link } from "react-router-dom";
import { Box, Text } from "rebass";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: white;
    background-color: gray;
  }
`;

const Home = () => {
  return (
    <Box>
      <StyledBox p={1}>
        <Text as="h1">ポートフォリオサイト</Text>
      </StyledBox>
      <Box p={1}>
        <Text sx={{ textAlign: "center", marginBottom: "1em" }}>
          現在業務で使用している言語・フレームワークの、TypeScript・Reactを使用して
          <br />
          アウトプットを目的に作ったポートフォリオサイトです。
        </Text>
        <Text sx={{ textAlign: "center" }}>
          成果物等は
          <StyledLink to="/contact">CONTACT</StyledLink>
          にあるGithubのリンク先にアップしておりますので、
          <br />
          リンク先よりご覧ください。
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
