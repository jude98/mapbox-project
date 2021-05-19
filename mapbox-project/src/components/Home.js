import React, { useState } from "react";
import Map from "./Map";
import RenderImage from "./RenderImage";
import MapScene from "./MapScene";

const Home = () => {
  const [showImage, setShowImage] = useState(false);
  const [showScene, setShowScene] = useState(false);
  const onChangeView = (value) => {
    setShowImage(value);
  };
  const onShowScene = (value) => {
    setShowScene(value);
  };
  return (
    <>
      {!showImage && !showScene && <Map onChangeView={onChangeView} />}
      {showImage && !showScene && (
        <RenderImage onChangeView={onChangeView} onShowScene={onShowScene} />
      )}
      {showScene && (
        <MapScene onChangeView={onChangeView} onShowScene={onShowScene} />
      )}
    </>
  );
};

export default Home;
