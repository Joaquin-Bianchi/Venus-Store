import React from "react";
import CardNewArrival from "../Cards/CardNewArrival";

function NewArrival() {
  return (
    <section className="pt-10 mb-20 w-[90%] m-auto">
      <div className="flex items-center mb-6">
        <div className="rounded w-2 h-12 bg-purple-600"></div>
        <h2 className="text-3xl ml-3 font-bold">New arrivals</h2>
      </div>
      <div className="flex justify-center">
        <CardNewArrival></CardNewArrival>
        <CardNewArrival></CardNewArrival>
        <CardNewArrival></CardNewArrival>
        <CardNewArrival></CardNewArrival>
      </div>
    </section>
  );
}

export default NewArrival;
