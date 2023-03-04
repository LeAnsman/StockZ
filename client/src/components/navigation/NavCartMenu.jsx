import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NavCartMenu({ closeCartMenu }) {
  const emptyCart = true;
  return (
    <div className="flex flex-col items-center mt-16">
      <div>
        <AiOutlineShoppingCart size={62} className="fill-primary" />
      </div>
      {emptyCart && (
        <>
          <p className="mt-4 mb-8">Your cart is empty</p>
          <ul className="flex flex-col items-center gap-8">
            <li>
              <Link
                to={"/products/men"}
                onClick={closeCartMenu}
                className="flex justify-center w-48 px-4 py-2 border-4 transition duration-500 hover:border-primary"
              >
                Shop Men
              </Link>
            </li>
            <li>
              <Link
                to={"/products/women"}
                onClick={closeCartMenu}
                className="flex justify-center w-48 px-4 py-2 border-4 transition duration-500 hover:border-primary"
              >
                Shop Women
              </Link>
            </li>
            <li>
              <Link
                to={"/products/kids"}
                onClick={closeCartMenu}
                className="flex justify-center w-48 px-4 py-2 border-4 transition duration-500 hover:border-primary"
              >
                Shop Kids
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                onClick={closeCartMenu}
                className="flex justify-center w-48 px-4 py-2 border-4 border-third transition duration-500 hover:border-primary"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={"/register"}
                onClick={closeCartMenu}
                className="flex justify-center w-48 px-4 py-2 border-4 border-third transition duration-500 hover:border-primary"
              >
                Register
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
