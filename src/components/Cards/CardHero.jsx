import Link from "next/link";
import React from "react";

function CardHero() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-center  m-auto lg:px-28">
        <div className="bg-[url('/assets/images/hero1.png')] bg-cover h-[500px]  lg:h-auto    w-full lg:w-1/2 flex flex-col  justify-center px-20 py-10">
          <h4 className="text-2xl lg:text-4xl text-white  font-bold my-4">
            WE MADE YOUR EVERYDAY FASHION BETTER!
          </h4>
          <p className="text-base lg:text-lg text-white font-light mb-4">
            In our journey to improve everyday fashion, euphonia presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          <div className="mt-4">
            <Link
              href=""
              className="px-12 py-4 bg-white text-black font-semibold rounded-xl text-center"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="w-full hidden lg:block lg:h-auto  lg:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/hero2.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default CardHero;
