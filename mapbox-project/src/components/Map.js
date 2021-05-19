import React, { useState } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { onSelectLocation } from "../actions/locationAction";
import { fetchImage } from "../actions/imageAction";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const accessToken = process.env.REACT_APP_API_KEY;

const Container = styled.div`
  overflow-x: hidden;
`;

const geolocateStyle = {
  right: "10px",
  margin: "50px",
  padding: "10px",
};

const Map = (props) => {
  const { onChangeView } = props;
  const dispatch = useDispatch();
  const { longitude, latitude } = useSelector((state) => state.location);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: latitude,
    longitude: longitude,
    zoom: 8,
  });

  const onchangeViewPort = (viewport) => {
    setViewport({ ...viewport, transitionDuration: 500 });
  };

  const onGeolocate = ({ coords }) => {
    dispatch(
      onSelectLocation(coords.longitude, coords.latitude, viewport.zoom)
    );
  };

  const onDragMarker = (evt) => {
    const [longitude, latitude] = evt.lngLat;
    dispatch(onSelectLocation(longitude, latitude, viewport.zoom));
    // const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${longitude},${latitude},${viewport.zoom},0/300x300?${accessToken}`;
    dispatch(fetchImage(longitude, latitude, viewport.zoom));
    // changeImage(url);
    onChangeView(true);
  };

  return (
    <Container>
      <ReactMapGL
        mapboxApiAccessToken={accessToken}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        onViewportChange={onchangeViewPort}
        onDblClick={onDragMarker}
        doubleClickZoom={false}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          onGeolocate={onGeolocate}
        />
        <Marker
          latitude={latitude}
          longitude={longitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragEnd={onDragMarker}
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ color: "red", fontSize: "25px" }}
          />
        </Marker>
      </ReactMapGL>
    </Container>
  );
};

export default Map;
