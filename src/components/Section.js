import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  const { title, description, image, buttonOneText, buttonTwoText } = props;
  return (
    <Wrap bgImg={image}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <ButtonOne>{buttonOneText}</ButtonOne>
            {buttonTwoText && <ButtonTwo>{buttonTwoText}</ButtonTwo>}
          </ButtonGroup>
          <ArrowDown src="images/down-arrow.svg"></ArrowDown>
        </Fade>
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => `url("images/${props.bgImg}")`};

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

const ItemText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  margin-top: 15vh;
  letter-spacing: 1.3px;

  h1 {
    margin: 0;
    font-size: 40px;
  }

  p {
    margin: 0;
    padding: 10px 0;
  }
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 10vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonOne = styled.button`
  height: 40px;
  width: 256px;
  margin: 10px;
  border: 1px solid transparent;
  border-radius: 999px;
  color: rgb(249, 249, 249);
  background-color: rgb(23, 26, 32, 0.8);
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 1.2px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const ButtonTwo = styled(ButtonOne)`
  background-color: rgb(220, 220, 220);
  color: rgb(0, 0, 0, 0.8);
`;

const ArrowDown = styled.img`
  display: block;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 5px;
  animation: bounce infinite 1.5s;
  overflow-x: hidden;
  cursor: pointer;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0px);
    }
    40% {
      transform: translateY(5px);
    }

    60% {
      transform: translateY(3px);
    }
  }
`;

export default Section;
