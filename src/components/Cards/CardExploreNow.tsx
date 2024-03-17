import React from "react";
import Link from "next/link";

function CardExploreNow() {
  return (
    <Link href="">
      <div className="w-[300px] h-[400px] mb-20">
        <div className="bg-slate-700 h-full rounded-xl">
          <img src="" alt="" className="w-full h-full"/>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-xl font-medium mt-2">Shirts</h6>
            <p className="text-gray-500">Explore Now!</p>
          </div>
          <div>
            <p className="text-xl font-bold">-{`>`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardExploreNow;
