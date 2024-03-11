import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const buttonNavbar =
    "px-2 py-2 rounded-xl hover:bg-purple-600 hover:text-white ease-in-out duration-300 bg-gray-200";

  return (
    <header className="flex items-center w-full 2xl:px-36    text-black bg-slate-100 h-24 overflow-hidden">
      <nav className="flex items-center justify-between w-full">
        <Link href="/">
          <Image src="" width={20} height={20} alt="logo" />
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-lg">
          <Link href="" className="font-semibold">
            Shop
          </Link>
          <Link href="">Men</Link>
          <Link href="">Woman</Link>
          <Link href="">Combos</Link>
          <Link href="">Joggers</Link>
        </div>
        <div className=" items-center gap-3 hidden lg:flex bg-gray-200 border border-gray-300 py-2 px-3 rounded-md">
          <CiSearch className=" text-gray-700" />
          <input
            className="bg-gray-200  outline-none font-medium "
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="hidden lg:flex  gap-3 jus items-center text-slate-600 text-2xl">
          {/* agregar condicional si esta logueado o no */}

          <Link href="" className={buttonNavbar}>
            <IoMdHeartEmpty />
          </Link>
          <Link href="/auth/login" className={buttonNavbar}>
            <RiUserLine />
          </Link>
          <Link href="" className={buttonNavbar}>
            <IoCartOutline />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
