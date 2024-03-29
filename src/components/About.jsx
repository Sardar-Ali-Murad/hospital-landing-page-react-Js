import React from "react";
import "./index.css";
import Img1 from "../assets/about-img.svg";

const About = () => {
  return (
    <div>
      <section class="about" id="about">
        <h1 class="heading">
          {" "}
          <span>about</span> us{" "}
        </h1>

        <div class="row">
          <div class="image">
            <img src={Img1} alt="" />
          </div>

          <div class="content">
            <h3>we take care of your healthy life</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              ducimus, quod ex cupiditate ullam in assumenda maiores et culpa
              odit tempora ipsam qui, quisquam quis facere iste fuga, minus
              nesciunt.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              vero ipsam laborum porro voluptates voluptatibus a nihil
              temporibus deserunt vel?
            </p>
            <a href="#" class="btn">
              {" "}
              learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
