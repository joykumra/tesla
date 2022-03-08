import React from "react";
import Section from "./Section";
import styled from "styled-components";
import { useQuery } from "react-query";

function Home() {
  const { isLoading, data, isError, error } = useQuery("tesla", async () => {
    const res = await fetch("http://localhost:3000/tesla");
    const data = await res.json();
    return data;
  });

  let content;

  content = data?.map((tesla) => {
    return <Section key={tesla.id} {...tesla}></Section>;
  });

  if (isLoading) {
    content = <h2>Loading....</h2>;
  }

  if (isError) {
    content = <h2>{error.message}</h2>;
  }

  return <Container>{content}</Container>;
}

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  h2 {
    display: grid;
    height: 100vh;
    place-items: center;
  }
`;

export default Home;
