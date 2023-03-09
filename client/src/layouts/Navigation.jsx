import React, { useContext } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import NavListDesktop from "../components/navigation/NavListDesktop";
import NavLogo from "../components/navigation/NavLogo";
import NavMobile from "../components/navigation/NavMobile";
import NavUser from "../components/navigation/NavUser";
import NavCart from "../components/navigation/NavCart";
import { UserContext } from "../context/UserContext";

export default function Navigation({ visible }) {
  const { user, setUser, ready } = useContext(UserContext);
  return (
    <nav className="grid grid-cols-3 items-center py-3 mx-2 sm:mx-8 lg:mx-24 ">
      <NavListDesktop />
      <NavMobile />
      <NavLogo />
      <div className="flex justify-end gap-8">
        <NavUser user={user} />
        <NavCart visible={visible} />
      </div>
    </nav>
  );
}
