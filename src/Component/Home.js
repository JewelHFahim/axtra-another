import React from "react";
import img from "./Asstets/1.jpg";
import "./Home.css";

const Home = () => {
  const link = document.querySelectorAll(".link");
  const linkHoverReveal = document.querySelectorAll(".hover-reveal");
  const linkImages = document.querySelectorAll(".hidden-img");

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mousemove", (e) => {
      linkHoverReveal[i].style.opacity = 1;
      linkHoverReveal[i].style.transform = `translate(-100%, -50% )`;
      linkImages[i].style.transform = "scale(1, 1)";
      linkHoverReveal[i].style.left = e.clientX + "px";
    });

    link[i].addEventListener("mouseleave", (e) => {
      linkHoverReveal[i].style.opacity = 0;
      linkHoverReveal[i].style.transform = `translate(-50%, -50%)`;
      linkImages[i].style.transform = "scale(0.8, 0.8)";
    });
  }

  return (
    <div>
      <nav>
        <ul className="border border-red-600">

          <li>
            <div className="link border border-red-600">
              <span className="text-[20px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione odio voluptas fugiat iure quo, nulla rem quod perferendis repellendus tenetur?</span>
              <div className="hover-reveal image01">
                <img src={img} className="hidden-img" alt="" />
              </div>
            </div>
          </li>
          
          <li>
            <div className="link border border-red-600">
              <span className="text-[20px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione odio voluptas fugiat iure quo, nulla rem quod perferendis repellendus tenetur?</span>
              <div className="hover-reveal image01">
                <img src={img} className="hidden-img" alt="" />
              </div>
            </div>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Home;
