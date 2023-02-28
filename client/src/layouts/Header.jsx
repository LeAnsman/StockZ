import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import HeaderBanner from "../components/HeaderBanner";
import NavList from "../components/NavList";

export default function Header() {
  let inactiveClassName =
    "text-5xl font-ShareTechMono text-primary tracking-widest -rotate-2 transition duration-500 hover:rotate-2";
  let activeClassName = `${inactiveClassName} underline underline-offset-4 rotate-0`;

  return (
    <header className="bg-white shadow-md">
      <HeaderBanner />
      <div className="grid grid-cols-3 mx-12 items-center py-3">
        <NavList />
        <NavMobile />
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

        <div className="flex justify-end gap-8">
          <button type="button">
            <AiOutlineUser size={32} className="fill-primary" />
          </button>
          <button type="button">
            <AiOutlineShoppingCart size={32} className="fill-primary" />
          </button>
        </div>
      </div>
    </header>
  );
}
