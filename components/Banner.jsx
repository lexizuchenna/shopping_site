import React from "react";
import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="hero-banner-container">
      <div className="d-flex">
        <div className="hero-left">
          <p className="beats-solo">OUR</p>
          <h3>Best Seller</h3>
          <h1>Spree</h1>
        </div>

        <div className="hero-right">
          <Image
            height={600}
            width={600}
            src={"/images/headphone.jpg"}
            className="hero-banner-image"
            alt="headphone"
          />
          {/* <img src={image} alt="headphones" className="hero-banner-image" /> */}
        </div>

        {/* <div>
          <Link href={`/product/`}>
            {/* <button type="button">{}</button> 
          </Link>
          <div className="desc">
            <h5>Description</h5>
            {/* <p>{heroBanner.desc}</p> 
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Banner;
