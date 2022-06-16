import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { useState, FC } from "react";
import styled from "styled-components";

type mapContainerStyle = {
  mapContainerStyle: {
    width: string;
    height: string;
  };
};

type center = {
  center: {
    lat: number;
    lng: number;
  };
};

type position = {
  position: {
    lat: number;
    lng: number;
  };
};

type Props = mapContainerStyle &
  center &
  position & { context?: string } & { link?: string };

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: black;
    background-color: #ffdc2e;
  }
`;

const Map: FC<Props> = ({
  mapContainerStyle,
  center,
  position,
  context,
  link,
}) => {
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const infoWindowOptions = {
    pixelOffset: size,
  };
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDobLeudrttgG3sOM9Vz0ky3ZScjaxD4Io"
      onLoad={() => createOffsetSize()}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={17}
      >
        <Marker position={position} />
        {context && (
          <InfoWindow position={position} options={infoWindowOptions}>
            <StyledLink href={link} target="_blank" rel="noopener noreferrer">
              {context}
            </StyledLink>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
