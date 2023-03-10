import React from "react";

import { Carousel } from "react-scroll-slider";
import Autumn from "./Component/Autumn";
import Spring from "./Component/Spring";
import Summer from "./Component/Summer";
import Winter from "./Component/Winter";

const Main = () => (
  <Carousel>
    <Winter />
    <Autumn />
    <Spring />
    <Summer />
  </Carousel>
);

export default Main;
