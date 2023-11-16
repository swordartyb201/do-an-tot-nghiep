import "./slider.css";
import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Image1 from "../../../img/co-working-space-tai-ha-noi-1.jpg";
import Image2 from "../../../img/phong-khach-sang-trong-banner.jpg";
import Image3 from "../../../img/van-phong-ao-1.jpg";

const data = [
  {
    id: 1,
    image: [Image2],
  },
  {
    id: 2,
    image: [Image1],
  },
  {
    id: 3,
    image: [Image3],
  },
];

const Slider = ({ type }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="image-container">
        <img
          src={data[currentSlide].image}
          alt=""
          className="home-slider-image"
        />
      </div>
    </div>
  );
};

export default Slider;
