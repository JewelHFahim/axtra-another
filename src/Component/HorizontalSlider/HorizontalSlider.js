import React from "react";
import "./HorizontalSlider.css";
import img from "../Asstets/2.jpg"

const HorizontalSlider = () => {
  return (
    <div className="border-[20px] border-green-600 h-screen w-screen">


      <div class="horizontal-scroll-wrapper squares text-white">
        <div className="project">
          <p className="text-[120px]">JEWEL1</p>
          <p className="text-[120px]">JEWEL2</p>
          <p className="text-[120px]">JEWEL3</p>
        </div>
{/* 
        <div className="project">
          <p><p className="text-[120px]">HOSSAIN</p></p>
          <p><p className="text-[120px]">HOSSAIN</p></p>
          <p><p className="text-[120px]">HOSSAIN</p></p>
        </div>
{/*
        <div className="project">
          <p className="text-[120px]">FAHIM</p>
          <p className="text-[120px]">FAHIM</p>
          <p className="text-[120px]">FAHIM</p>
        </div> */}
        
        
      </div>
    </div>
  );
};

export default HorizontalSlider;
