import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderBanner from "../components/header/HeaderBanner";
import Navigation from "../layouts/Navigation";

export default function Header() {
  // hide header on scrool
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 80 && currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`w-full bg-white shadow-lg fixed top-0 duration-500  ${
        visible ? "lg:translate-y-0" : "lg:-translate-y-[150px]"
      }`}
    >
      <HeaderBanner
        text={"The New Big Foot Limited Edition Is Out. "}
        to={"/products/new"}
      />
      <Navigation />
    </header>
  );
}
