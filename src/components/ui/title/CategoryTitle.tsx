import { title } from "process";
import React from "react";
import { titleFont } from "../../../config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

function CategoryTitle({ title, subtitle, className }: Props) {
  return (
    <div>
      <h1
        className={`${titleFont.className}  capitalize antialiased text-4xl font-bold  mt-10  `}
      >
        {title}
      </h1>
      <hr className="bg-zinc-400 h-[2px]" />
      {subtitle && (
        <h3 className="text-xl mt-3 mb-3  capitalize">{subtitle}</h3>
      )}
    </div>
  );
}

export default CategoryTitle;
