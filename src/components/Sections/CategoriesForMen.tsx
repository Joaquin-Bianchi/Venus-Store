import React from "react";
import CardExploreNow from "../Cards/CardExploreNow";

function CategoriesForMen() {
  return (
    <section className="w-[90%] m-auto mt-20">
      <div className="flex items-center mb-6 justify-center md:justify-start">
        <div className="rounded w-2 h-12 bg-purple-600 "></div>
        <h2 className="text-3xl ml-3 font-bold">Categories For Men</h2>
      </div>
      <div className="items-center flex flex-wrap justify-center gap-7 md:justify-between">
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
      </div>
    </section>
  );
}

export default CategoriesForMen;
