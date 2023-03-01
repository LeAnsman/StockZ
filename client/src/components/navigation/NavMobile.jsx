import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

export default function NavMobile() {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const openNavMobile = () => {
    setShowNavMobile(true);
  };

  const closeNavMobile = () => {
    const menu = document.querySelector(`#menu`);
    const overlay = document.querySelector(`#overlay`);

    overlay.classList.add("animate-fadeOut");
    menu.classList.add("animate-fadeRight");
    setTimeout(() => {
      menu.classList.add("opacity-0");
      overlay.classList.add("opacity-0");
      setTimeout(() => {
        setShowNavMobile(false);
      }, 100);
    }, 300);
  };

  return (
    <div className="lg:hidden ">
      <RxHamburgerMenu
        size={32}
        className={"cursor-pointer transition duration-300 hover:text-primary"}
        onClick={openNavMobile}
      />

      {showNavMobile && (
        <>
          <div
            className="fixed top-0 left-0 bg-black/50 h-screen w-full z-10 animate-fadeIn"
            id="overlay"
          ></div>
          <div
            className="fixed top-0 left-0 w-11/12 sm:w-3/4 md:w-1/2 bg-white h-screen z-20 animate-comeLeft"
            id="menu"
          >
            <button className="absolute right-5 top-5" onClick={closeNavMobile}>
              <RxCross1
                size={32}
                className="transition duration-500 hover:rotate-90 hover:text-primary"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
