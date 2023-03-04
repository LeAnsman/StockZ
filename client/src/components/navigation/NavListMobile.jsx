import React from "react";
import { NavLink } from "react-router-dom";

export default function NavListMobile({ closeNavMobile }) {
  let inactiveClassName =
    "nav__list__item transition duration-500 hover:text-primary";
  let activeClassName = `${inactiveClassName} text-primary before:scale-x-100`;
  return (
    <ul className="flex flex-col gap-[5vh] items-center mt-16  lg:hidden uppercase tracking-wider font-semibold ">
      <li>
        <NavLink
          to={"/products/men"}
          onClick={closeNavMobile}
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Men
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/products/women"}
          onClick={closeNavMobile}
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Women
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/products/kids"}
          onClick={closeNavMobile}
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Kids
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/products/new"}
          onClick={closeNavMobile}
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          New&nbsp;Arrivals
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/products/sale"}
          onClick={closeNavMobile}
          className="nav__list__item text-red-900 transition duration-500 hover:text-primary"
        >
          Sale
        </NavLink>
      </li>
    </ul>
  );
}
