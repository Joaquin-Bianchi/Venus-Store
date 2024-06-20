import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import DropdownProfile from "./DropdownMenu";
import ActiveLink from "./ActiveLink";
import DropdownMenu from "./DropdownMenu";

const navItems = [
  {
    path: "/shop",
    name: "Tienda",
  },
  {
    path: "/category/men",
    name: "Hombre",
  },
  {
    path: "/category/women",
    name: "Mujer",
  },
  {
    path: "/category/kid",
    name: "Niños",
  },
];
async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <header className="flex items-center w-full 2xl:px-36   text-black bg-neutral-100 h-24 overflow-hidden">
      <nav className="flex items-center justify-between w-full">
        <Link className="mt-3" href="/">
          <Image
            width={120}
            height={200}
            src="/images/logo-venus.png"
            alt="logo-venus"
          />
        </Link>
        <div className="hidden lg:flex  items-center gap-10 text-lg">
          {navItems.map((navItem) => (
            <ActiveLink
              name={navItem.name}
              path={navItem.path}
              key={navItem.path}
            ></ActiveLink>
          ))}
        </div>
        {/* Search button */}
        <div className=" items-center text-gray-700 gap-3 hidden lg:flex bg-gray-200 border border-gray-300 py-2 px-3 rounded-md">
          <CiSearch />
          <input
            className="bg-gray-200  outline-none font-medium "
            type="text"
            placeholder="Buscar"
          />
        </div>
        <div className="hidden lg:flex items-center text-slate-600 text-2xl">
          {/* <Link href="" className={buttonNavbar}>
          fav
            <IoMdHeartEmpty />
          </Link> */}

          <div className="flex items-center gap-3 ">
            {user ? (
              <>
                {/* <Link
                  href=""
                  className="bg-gray-200 ease-in-out text-3xl duration-300 text-black px-3 py-2  rounded-lg   gap-1 font-medium flex items-center"
                ></Link> */}
                <DropdownMenu />
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className=" text-black  py-3  rounded-lg text-sm  font-medium flex items-center"
                >
                  Iniciar Sesion
                </Link>
                <Link
                  href="/api/auth/login"
                  className="bg-purple-600 text-white px-5 py-3  rounded-lg text-sm  font-medium flex items-center"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
          <div className="h-14 w-px bg-zinc-400 ml-3 mr-3"></div>
          <Link
            href="/cart"
            className="  bg-gray-200 ease-in-out text-3xl duration-300 text-black px-3 py-2  rounded-lg   gap-1 font-medium flex items-center"
          >
            <IoCartOutline />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

// import {
//   Button,
//   Navbar as nav,
//   NavbarBrand,
//   NavbarCollapse,
//   NavbarLink,
//   NavbarToggle,
// } from "flowbite-react";
// import ActiveLink from "./ActiveLink";
// import DropdownProfile from "./DropdownProfile";

// export function Component() {
//   return (
//     <Navbar fluid rounded>
//       <NavbarBrand href="https://flowbite-react.com">
//         <img
//           src="/favicon.svg"
//           className="mr-3 h-6 sm:h-9"
//           alt="Flowbite React Logo"
//         />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//           Flowbite React
//         </span>
//       </NavbarBrand>
//       <div className="flex md:order-2">
//         <Button>Get started</Button>
//         <NavbarToggle />
//       </div>
//       <NavbarCollapse>
//         <NavbarLink href="#" active>
//           Home
//         </NavbarLink>
//         <NavbarLink href="#">About</NavbarLink>
//         <NavbarLink href="#">Services</NavbarLink>
//         <NavbarLink href="#">Pricing</NavbarLink>
//         <NavbarLink href="#">Contact</NavbarLink>
//       </NavbarCollapse>
//     </Navbar>
//   );
// }
