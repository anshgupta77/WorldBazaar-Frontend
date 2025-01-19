import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from "./../assets/Carousal.img1.jpg";
import img2 from "./../assets/Carousal.img2.jpg";
import img3 from "./../assets/Carousal.img3.jpg";
import img4 from "./../assets/Carousal.img4.jpg";
import img5 from "./../assets/Carousal.img5.jpg";
const Carousel = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[50vh] object-cover object-top overflow-y-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;