import React from "react";
import styled from "styled-components";

import { ActiveItem } from "react-scroll-slider";


import imageUrl from "../../assets/2.jpg";

import Content from "./Content";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Image = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
`;

const forwardStyleImage = { transform: "translateX(-100%)", opacity: 0 };
const backwardStyleImage = { transform: "translateX(100%)", opacity: 0 };

const forwardStyleContent = { transform: "scale(.5)", opacity: 0 };
const backwardStyleContent = { transform: "scale(2)", opacity: 0 };

const Autumn = () => (
  <Wrapper>
    {/* <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Content title={"This is autumn"} />
    </ActiveItem> */}

    <ActiveItem
      forwardStyle={forwardStyleImage}
      backwardStyle={backwardStyleImage}
    >
      <Image />
    </ActiveItem>
  </Wrapper>
);

export default Autumn;
