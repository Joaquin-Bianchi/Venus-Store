/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
interface Props {
  description: string;
}

function CardNewArrival({ description }: Props) {
  return (
    <div className="flex flex-col justify-center">
      <img src="" className="rounded-xl bg-slate-800 h-80 w-80" alt="" />
      <p className="text-3xl text-red-700">{description}</p>
    </div>
  );
}

export default CardNewArrival;
