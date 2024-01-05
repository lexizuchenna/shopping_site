"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function Banner() {
  const banners = [
    { image: "/images/headphone.jpg" },
    { image: "/images/headphone1.jpg" },
    { image: "/images/headphone2.jpg" },
  ];
  return (
    <div className="hero-banner-container">
      <div
        className="d-flex"
        style={{ justifyContent: "space-between", height: "100%" }}
      >
        <div className="hero-left d-desktop">
          <p className="beats-solo">OUR</p>
          <h3>Best Seller</h3>
          <h1>Spree</h1>
        </div>
        <div className="hero-right">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={{ delay: 2000 }}
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <Link href="/">
                  <div className="hero-image-container">
                    <Image
                      height={600}
                      width={600}
                      src={banner.image}
                      className="hero-banner-image"
                      alt="headphone"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Banner;
