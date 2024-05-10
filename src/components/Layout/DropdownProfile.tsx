"use client";
import { Dropdown, DropdownItem } from "flowbite-react";
import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

function DropdownProfile() {
  return (
    <Dropdown label="My Profile" color="purple" dismissOnClick={false}>
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem>Orders</DropdownItem>
      <DropdownItem className="gap-2">
        <LogoutLink className=""> Sign out </LogoutLink>
        <IoIosLogOut className=" text-red-500" />
      </DropdownItem>
    </Dropdown>
  );
}
export default DropdownProfile;
