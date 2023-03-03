import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import NavCartMenu from "./NavCartMenu";

export default function NavCart({ visible }) {
  const [showCartMenu, setShowCartMenu] = useState(false);

  const openCartMenu = () => {
    setShowCartMenu(true);
  };

  const closeCartMenu = () => {
    const menu = document.querySelector(`#menu`);
    const overlay = document.querySelector(`#overlay`);

    overlay.classList.add("animate-fadeOut");
    menu.classList.add("animate-fadeLeft");
    setTimeout(() => {
      menu.classList.add("opacity-0");
      overlay.classList.add("opacity-0");
      setShowCartMenu(false);
    }, 300);
  };

  return (
    <>
      <button onClick={openCartMenu}>
        <AiOutlineShoppingCart
          size={32}
          className="transition duration-300 hover:fill-primary"
        />
      </button>
      {showCartMenu && (
        <>
          <div
            className={`absolute top-0 left-0 bg-black/50 min-h-screen w-full z-10 transition duration-500 animate-fadeIn ${
              visible ? "" : "lg:-translate-y-[-150px]"
            }`}
            id="overlay"
            onClick={closeCartMenu}
          ></div>
          <div
            className={`fixed top-0 right-0 w-11/12 sm:w-3/4 md:w-1/2 xl:w-1/3 bg-white h-screen z-20 transition duration-500 animate-comeRight ${
              visible ? "" : "lg:-translate-y-[-150px]"
            }`}
            id="menu"
          >
            <button className="absolute left-5 top-5" onClick={closeCartMenu}>
              <RxCross1
                size={32}
                className="transition duration-500 hover:rotate-90 hover:text-primary"
              />
            </button>
            <NavCartMenu closeCartMenu={closeCartMenu} />
          </div>
        </>
      )}
    </>
  );
}
