import { Link, Avatar } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Box, Text } from "rebass";
import styled from "styled-components";
import { StyledBox } from "./Home";

const MailAvater = styled(Avatar)`
  background-color: #4caf50;
  color: #fff;
`;

const TwitterAvater = styled(Avatar)`
  background-color: #2196f3;
`;

const Contact = () => {
  return (
    <Box p={2}>
      <StyledBox>
        <Text as="h1">Contact</Text>
      </StyledBox>
      <StyledBox>
        <Link href="mailto:masuno.official@gmail.com" style={{ margin: "8px" }}>
          <MailAvater>
            <MailIcon />
          </MailAvater>
        </Link>
        <Link
          href="https://twitter.com/engineer_masuno"
          target="_blank"
          rel="noopener noreferrer external"
          style={{ margin: "8px" }}
        >
          <TwitterAvater>
            <TwitterIcon />
          </TwitterAvater>
        </Link>
        <Link
          href="https://github.com/takafumi-masuno"
          target="_blank"
          rel="noopener noreferrer external"
          style={{ margin: "8px" }}
        >
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </Link>
      </StyledBox>
    </Box>
  );
};

export default Contact;
