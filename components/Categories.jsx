"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = [
    { name: "food", id: 1, image: "/images/headphone.jpg" },
    { name: "clothes", id: 1, image: "/images/headphone.jpg" },
    { name: "beauty items", id: 1, image: "/images/headphone.jpg" },
    { name: "wigs", id: 1, image: "/images/headphone.jpg" },
    { name: "snacks", id: 1, image: "/images/headphone.jpg" },
    { name: "groceries", id: 1, image: "/images/headphone.jpg" },
    { name: "women's clothing", id: 1, image: "/images/headphone.jpg" },
  ];

  const swiper = useSwiper();

  // const nextEl = () => {
  //   cons
  //   return (
  //     <div>
  //       <FaArrowRight />
  //     </div>
  //   );
  // };
  return (
    <div style={{ margin: "0 18px" }}>
      <div className="products-heading">
        <h2>Categories</h2>
        <p>Shop by categories</p>
      </div>
      <div className="products-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination]}
          navigation
          onNavigationNext={() => {
            console.log("Next");
          }}
          breakpoints={{ 400: { slidesPerView: 2 } }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard category={category} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Categories;
