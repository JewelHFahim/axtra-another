import React from "react";
import "./HorizontalSlider.css";
import img from "../Asstets/2.jpg"

const HorizontalSlider = () => {
  return (
    <div className="border border-green-600 w-[1000px] h-[1000px] ">
      <div class="horizontal-scroll-wrapper squares text-white">

 
        <div className="w-[00px] h-[600px]">
          <p className="">WHY <br /> CHOOSE US</p>
        </div>

        <div className="w-[800px] h-[800px]">
          <img src={img} alt="" />
        </div>

        <div className="w-[600px] h-[600px]">
          <p className="">Have you project in mind?</p>
          <p className="">Let’s make something great together!</p>
        </div>
        
        
      </div>
    </div>
  );
};

export default HorizontalSlider;
