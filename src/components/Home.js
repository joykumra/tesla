import React from "react";
import Section from "./Section";
import styled from "styled-components";
import data from "../data";

function Home() {
  return (
    <Container>
      {data.map((tesla) => {
        return <Section key={tesla.id} {...tesla}></Section>;
      })}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
