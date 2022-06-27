import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {transform : rotate(0deg)}
  to {transform : rotate(360deg)}
`
const Homebox = styled.div`
  width:200px;
  height:200px;
  border-radius: 10px;
  background:blue;
  position:absolute;
  top:30%;
  left:50%;
  margin:0 0 0 -100px;
  animation: ${rotate} 2s linear infinite;
`

function Home(props) {
  return (
    <>
      <Homebox />
    </>
  );
}

export default Home;
