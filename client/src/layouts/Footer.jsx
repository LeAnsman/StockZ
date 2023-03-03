import React from "react";
import SocialLinks from "../components/footer/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white ">
      <div className="pt-4 sm:pt-1 sm:mx-24 flex flex-col sm:flex-row justify-between items-center gap-1">
        <p className=" flex flex-col md:flex-row md:gap-4 text-center text-sm">
          © 2023 Anselme Dor.
          <span> All Rights Reserved.</span>
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
