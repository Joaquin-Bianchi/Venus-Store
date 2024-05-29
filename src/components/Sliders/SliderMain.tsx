"use client";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";
function SliderMain() {
  return (
    <div className="h-[350px] sm:[500px] md:[540px]  xl:h-[680px] 2xl:h-[706px] m-auto">
      <Carousel className="w-full" slideInterval={600000000}>
        <Link className="h-full" href="/shop">
          <img
            className="w-full h-full object-left 2xl:object-top object-cover "
            src="/assets/images/slider-1.jpg"
            alt=""
          />
        </Link>
        <Link className="h-full" href="shop">
          <img
            className="w-full h-full object-left 2xl:object-top object-cover "
            src="/assets/images/slider-2.webp"
            alt=""
          />
        </Link>
        <Link className="h-full" href="shop">
          <img
            className="w-full h-full object-center object-cover "
            src="/assets/images/slider-3.jpg"
            alt=""
          />
        </Link>
      </Carousel>
    </div>
  );
}

export default SliderMain;
