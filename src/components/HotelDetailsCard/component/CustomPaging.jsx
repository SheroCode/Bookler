import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomPaging({ gallery,main}) {
  console.log(gallery);

  const settings = {
    customPaging: function (i) {
      return (
        <div className='flex'>
          <img
            src={main}
            className='h-14 w-20 object-contain rounded-md border '
            alt={`thumb-${i}`}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: " flex rounded-lg w-full  object-cover ",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {gallery.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              className='rounded-lg w-full  h object-cover'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomPaging;
