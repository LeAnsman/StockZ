import React from "react";
import SocialLinks from "../components/footer/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-third text-white ">
      <div className="mx-24 flex justify-between items-center">
        <p className="mt-1 text-center text-sm">
          © 2023 Anselme Dor. All Rights Reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
