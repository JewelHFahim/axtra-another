import React from "react";
import img from "../Asstets/1.jpg";
import "./Test.css";

const Test = () => {
  var cursor = document.querySelector(".follow-img");
  document.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    cursor.style.left = `${x}px`;
  });

  return (
    <div className="relative mx-20 ">

      {/* Section One */}
            <div className='vsb   my-20 border border-green-500'>
                 <div className=' py-20'>
                    <h1 className='text-[32px] font-bold'>SEARCH ENGINE <br /> OPTIMIZATION</h1>
                </div>
                <img src={img} alt="img-cover" class="follow-img" />
            </div>

      {/* Section One */}
      <div className="vsb p-72  mt-[800px] border border-red-600">
        <div className="py-20">
          <h1 className="text-[32px] font-bold">
            SEARCH ENGINE <br /> OPTIMIZATION
          </h1>
        </div>

        <img src={img} alt="img-cover" class="follow-img" />
      </div>
    </div>
  );
};

export default Test;
