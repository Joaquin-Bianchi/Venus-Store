import React from "react";
import CardNewArrival from "../cards/CardNewArrival";
import prisma from "../../lib/prisma";

async function NewArrival() {
  return (
    <section className="pt-10 mb-20 w-[90%] m-auto">
      <div className="flex items-center mb-6">
        <div className="rounded w-2 h-12 bg-purple-600"></div>
        <h2 className="text-3xl ml-3 font-bold">Best Clothes</h2>
      </div>
      <div className="flex justify-between flex-wrap"></div>
    </section>
  );
}

export default NewArrival;
