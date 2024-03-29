import React from "react";
import "./index.css";
import Img1 from "../assets/book-img.svg";

const Booking = () => {
  return (
    <section class="book" id="book">
      <h1 class="heading">
        {" "}
        <span>book</span> now{" "}
      </h1>

      <div class="row">
        <div class="image">
          <img src={Img1} alt="" />
        </div>

        <form action="">
          <h3>book appointment</h3>
          <input type="text" placeholder="your name" class="box" />
          <input type="number" placeholder="your number" class="box" />
          <input type="email" placeholder="your email" class="box" />
          <input type="date" class="box" />
          <input type="submit" value="book now" class="btn" />
        </form>
      </div>
    </section>
  );
};

export default Booking;
