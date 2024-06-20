"use client";

import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiUser } from "react-icons/hi";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

function DropdownMenu() {
  return (
    <Dropdown
      label="Menu"
      className="bg-red-500"
      color="purple"
      dismissOnClick={true}
    >
      <Dropdown.Header>
        <span className="block text-lg">Bonnie Green</span>
        <span className="block truncate text-base font-medium">
          bonnie@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item icon={HiUser}>
        <Link href="/profile" className="text-base">
          Perfil
        </Link>
      </Dropdown.Item>
      <Dropdown.Item icon={HiCurrencyDollar}>
        <Link href="/orders" className="text-base">
          Ordenes
        </Link>
      </Dropdown.Item>
      <Dropdown.Divider />

      <Dropdown.Item icon={HiLogout}>
        <LogoutLink className="text-base "> Salir</LogoutLink>
      </Dropdown.Item>
    </Dropdown>
  );
}
export default DropdownMenu;
