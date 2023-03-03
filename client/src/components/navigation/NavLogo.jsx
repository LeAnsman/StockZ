import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLogo() {
  let inactiveClassName =
    "nav__list__item before:bg-primary text-3xl sm:text-5xl font-ShareTechMono text-primary tracking-widest -rotate-2 transition duration-500  hover:rotate-2";
  let activeClassName = `${inactiveClassName} rotate-0 before:scale-x-100`;
  return (
    <div className="flex justify-center">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? activeClassName : inactiveClassName
        }
      >
        StockZ
      </NavLink>
    </div>
  );
}
