import React from "react";
import { NavLink } from "react-router-dom";

export default function NavListDesktop() {
  let inactiveClassName = "transition duration-500 hover:text-primary";
  let activeClassName = `${inactiveClassName} text-primary before:scale-x-100`;

  return (
    <ul className="hidden lg:flex gap-12 font-Jost font-medium uppercase">
      <li>
        <NavLink
          to={"/products/men"}
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
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Kids
        </NavLink>
      </li>
      <li className="hidden 2xl:block">
        <NavLink
          to={"/products/new"}
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
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : inactiveClassName + " text-red-900 hover:text-primary"
          }
        >
          Sale
        </NavLink>
      </li>
    </ul>
  );
}