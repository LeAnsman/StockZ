import React from "react";
import { Link } from "react-router-dom";

export default function HeaderBanner() {
  return (
    <div className="py-2 bg-primary">
      <p className="text-center">
        The Limited Edition Big Foot Is Here.{" "}
        <Link to={"/products/new"}>Shop now !</Link>
      </p>
    </div>
  );
}
