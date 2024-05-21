"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  name: string;
}

function ActiveLink({ path, name }: Props) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      key={path}
      href={path}
      className={`${
        pathName === path
          ? "font-extrabold text-secondary underline underline-offset-8"
          : ""
      } hover:underline hover:underline-offset-8  cursor-pointer  ease-in`}
    >
      {name}
    </Link>
  );
}

export default ActiveLink;
