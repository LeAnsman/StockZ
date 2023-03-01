import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLogo() {
  let inactiveClassName =
    "text-5xl font-ShareTechMono text-secondary tracking-widest -rotate-2 transition duration-500  hover:rotate-2";
  let activeClassName = `${inactiveClassName} underline underline-offset-4 rotate-0`;
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
