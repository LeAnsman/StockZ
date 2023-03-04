import React from "react";
import axios from "axios";
export default function HomePage() {
  const handleClick = (e) => {
    e.preventDefault();
    axios.get("/logout");
  };
  return (
    <div className="min-h-[calc(100vh-225px)] sm:min-h-[calc(100vh-168px)]">
      <p>
        HomePage
        <button onClick={handleClick}>logout</button>
      </p>
    </div>
  );
}
