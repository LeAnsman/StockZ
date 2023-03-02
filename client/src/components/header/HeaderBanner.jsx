import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderBanner({ text, to }) {
  return (
    <div className="bg-primary py-2">
      <p className="text-center text-sm text-white">
        {text}{" "}
        <Link to={to} className="underline">
          Shop now
        </Link>{" "}
        !
      </p>
    </div>
  );
}
