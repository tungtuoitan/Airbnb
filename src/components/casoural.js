import React, { Component } from "react";
import Slider from "react-slick";

function ItemSlider({path}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
      <Slider {...settings}>
        <div className="IMG_GROUP     w-full object-cover">
          <img
            src={path}
            className="   h-calc-vw48  m-0 max-w-full max-h-full object-cover  "
          />
        </div>
      

      </Slider>
    );
}

export default ItemSlider
