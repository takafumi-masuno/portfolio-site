import { Card, CardActionArea, CardContent } from "@material-ui/core";
import { Box, Text } from "rebass";
import styled from "styled-components";

const SkillCard = styled(Card)`
  width: 730px;
  max-width: 100%;
  background-color: gray;
  color: white;
`;

const CardItem = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <SkillCard>
      <CardActionArea>
        <CardContent>
          <Text as="h2" sx={{ fontSize: "24px" }}>
            {label}
          </Text>
          <Text fontSize="20px">{description}</Text>
        </CardContent>
      </CardActionArea>
    </SkillCard>
  );
};

const Skills = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Text as="h1">Skills</Text>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <CardItem
            label="言語"
            description="JavaScript / TypeScript / Python"
          />
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <CardItem
            label="フレームワーク・ライブラリ"
            description="React / Redux"
          />
        </Box>
      </Box>
    </>
  );
};

export default Skills;
