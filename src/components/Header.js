import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [showBurgerNav, setShowBurgerNav] = useState(false);

  return (
    <Container showBlur={showBurgerNav}>
      <Logo href="/">
        <img src="images/logo.svg" alt="logo"></img>
      </Logo>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Panels</a>
        <a href="#">Solar Roofs</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#" onClick={() => setShowBurgerNav(true)}>
          Menu
        </a>
      </RightMenu>
      <BurgerNav show={showBurgerNav}>
        <Icon>
          <CloseIcon onClick={() => setShowBurgerNav(false)}></CloseIcon>
        </Icon>
        <Links>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
          <a href="#">Solar Panels</a>
          <a href="#">Solar Roofs</a>
          <a href="#">Existing Inventory</a>
          <a href="#">Used Inventory</a>
          <a href="#">Trade-In</a>
          <a href="#">Test Drive</a>
          <a href="#">Powerwall</a>
          <a href="#">Commercial Energy</a>
          <a href="#">Utilities</a>
          <a href="#">Charging</a>
          <a href="#">Find Us</a>
          <a href="#">Support</a>
          <a href="#">Invester Relations</a>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <a href="#">More</a>
        </Links>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
  z-index: 10;
`;

const Logo = styled.a`
  margin: 0 30px;
  img {
    width: 100%;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  flex: 1;

  a {
    padding: 0 15px;
    font-size: 17px;
    font-weight: bolder;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;

  a {
    padding: 0 12px;
    font-size: 17px;
    font-weight: bolder;
    cursor: pointer;

    @media (max-width: 1100px) {
      display: none;
    }
  }

  a:last-child {
    @media (max-width: 1100px) {
      display: unset;
      background-color: rgba(256, 256, 256, 0.2);
      padding: 3px 12px;
      border-radius: 999px;
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: white;
  z-index: 99;
  overflow: scroll;
  padding: 0 30px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: all 200ms ease-in-out;
`;

const Icon = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;

  svg {
    cursor: pointer;
    font-weight: bold;
  }
`;

const Links = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 50px;

  a {
    margin: 9px 0;
    font-weight: bolder;
    padding: 3px 12px;
    border-radius: 10px;

    &:hover {
      background-color: rgba(230, 230, 230, 0.5);
    }
  }
`;

export default Header;
