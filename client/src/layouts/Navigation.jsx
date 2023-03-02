import React from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import NavListDesktop from "../components/navigation/NavListDesktop";
import NavLogo from "../components/navigation/NavLogo";
import NavMobile from "../components/navigation/NavMobile";
import NavUser from "../components/navigation/NavUser";
import NavCart from "../components/navigation/NavCart";

export default function Navigation({ visible }) {
  return (
    <nav className="grid grid-cols-3 items-center py-3 mx-8 lg:mx-24 ">
      <NavListDesktop />
      <NavMobile />
      <NavLogo />
      <div className="flex justify-end gap-8">
        <NavUser />
        <NavCart visible={visible} />
      </div>
    </nav>
  );
}
