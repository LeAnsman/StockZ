import React from "react";

export default function PrimaryButton({ className, type, children }) {
  return (
    <button
      type={type}
      className={`py-2 px-4 bg-primary text-white rounded-lg font-medium tracking-wider uppercase transition duration-300 hover:bg-primaryLight hover:ring-1 hover:ring-primary ${className}`}
    >
      {children}
    </button>
  );
}
