import React, { useRef } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Vector3, Color3 } from "@babylonjs/core";
import styled from "styled-components";
import "../../src/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import imageUrl from '../images/map-image.png';


const BackButton = styled.div`
  position: absolute;
  font-size: 25px;
  top: 40px;
  left: 7%;
  font-weight: 500;
  cursor: pointer;
`;

const SpinningBox = ({ name, position, url }) => {
  const boxRef = useRef(null);
  return (
    <box
      name={name}
      ref={boxRef}
      size={2}
      position={position}
      height={1}
      width={0.75}
      depth={0.25}
    >
      <standardMaterial>
        <texture url={url} assignTo={"diffuseTexture"} />
      </standardMaterial>
    </box>
  );
};

const MapScene = ({ onChangeView, onShowScene }) => {
  const { imageUrl } = useSelector((state) => state.image);
  const onClickBack = () => {
    onChangeView(false);
    onShowScene(false);
  };
  return (
    <>
      <BackButton onClick={onClickBack}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "10px" }} />
        Back to Map
      </BackButton>
      <div className="canvasDiv">
        <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
          <Scene>
            <arcRotateCamera
              name="camera1"
              target={Vector3.Zero()}
              alpha={(3 * Math.PI) / 4}
              beta={Math.PI / 4}
              radius={2}
              lowerRadiusLimit={2}
              upperRadiusLimit={5}
            />
            <hemisphericLight
              name="light1"
              intensity={10}
              direction={Vector3.Up()}
            />
            <SpinningBox
              name="left"
              position={new Vector3(0, 0, 0)}
              color={Color3.FromHexString("#EEB5EB")}
              url={imageUrl}
            />
          </Scene>
        </Engine>
      </div>
    </>
  );
};

export default MapScene;
