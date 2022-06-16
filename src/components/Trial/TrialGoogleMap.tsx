import { Box, Text } from "rebass";
import { StyledBox } from "../Home";
import Map from "./Map";

const mapContainerStyle = {
  width: "100%",
  height: "50vw",
};

const center = {
  lat: 35.68529713682469,
  lng: 139.75285233146448,
};

export const TrialGoogleMap = () => {
  return (
    <Box>
      <StyledBox p={1}>
        <Text as="h1">React Three Fiberのお試し</Text>
      </StyledBox>
      <Box
        sx={{
          width: "50%",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <Map
          mapContainerStyle={mapContainerStyle}
          center={center}
          position={center}
          context="皇居"
          link="https://sankan.kunaicho.go.jp/guide/koukyo.html"
        />
      </Box>
    </Box>
  );
};
