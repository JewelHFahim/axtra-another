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
    <nav>
      <div className="vsb1 border border-green-600 p-2">
        <li>
          <div className="link border border-red-600">
            <span className="text-[40px] m-10">Welcome</span>
            <div className="hover-reveal">
              <img src={img} className="hidden-img" alt="" />
            </div>
          </div>
        </li>
      </div>
    </nav>
  );
};

export default Home;
