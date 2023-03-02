import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="w-11/12 xl:w-5/6 mx-auto min-h-[calc(100vh-56px)] pt-32 font-Jost">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
