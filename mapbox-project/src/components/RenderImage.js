import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  background-color: #ced7ef;
  box-shadow: 5px 5px 20px;
  height: 700px;
  width: 700px;
`;

const Heading = styled.div`
  font-size: 30px;
  margin-top: 10px;
  text-align: center;
`;

const Image = styled.img`
  margin: 25px 0 0 95px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 40px 100px 0 0;
`;

const Button = styled.button`
  background-color: ${(props) => (props.exit ? "#FF0000" : "#4264fb")};
  color: #ffffff;
  min-height: 35px;
  width: ${(props) => props.width};
  margin-left: 25px;
  border-radius: 50px;
  text-align: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: ${(props) => (props.exit ? "#FF0000" : "#4264fb")};
    font-size: 15px;
    font-weight: bold;
  }
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  outline: none;
`;

const RenderImage = ({ onChangeView, onShowScene }) => {
  const { imageUrl } = useSelector((state) => state.image);
  return (
    <Container>
      <ImageContainer>
        <Heading>Static Image of the Location</Heading>
        <Image src={imageUrl} alt="Map" />
        <Actions>
          <Button width="100px" exit onClick={() => onChangeView(false)}>
            Cancel
          </Button>
          <Button width="150px" onClick={() => onShowScene(true)}>
            Map to 3D modal
          </Button>
        </Actions>
      </ImageContainer>
    </Container>
  );
};

export default RenderImage;
