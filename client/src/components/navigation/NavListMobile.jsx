import React from "react";
import { Link } from "react-router-dom";

export default function NavListMobile({ closeNavMobile }) {
  return (
    <ul className="flex flex-col gap-[5vh] items-center mt-16  lg:hidden ">
      <li>
        <Link
          to={"/products/men"}
          onClick={closeNavMobile}
          className="nav__list__item transition duration-500 hover:text-primary"
        >
          Men
        </Link>
      </li>
      <li>
        <Link
          to={"/products/women"}
          onClick={closeNavMobile}
          className="nav__list__item transition duration-500 hover:text-primary"
        >
          Women
        </Link>
      </li>
      <li>
        <Link
          to={"/products/kids"}
          onClick={closeNavMobile}
          className="nav__list__item transition duration-500 hover:text-primary"
        >
          Kids
        </Link>
      </li>
      <li>
        <Link
          to={"/products/new"}
          onClick={closeNavMobile}
          className="nav__list__item transition duration-500 hover:text-primary"
        >
          New&nbsp;Arrivals
        </Link>
      </li>
      <li>
        <Link
          to={"/products/sale"}
          onClick={closeNavMobile}
          className="nav__list__item text-red-900 transition duration-500 hover:text-primary"
        >
          Sale
        </Link>
      </li>
    </ul>
  );
}
