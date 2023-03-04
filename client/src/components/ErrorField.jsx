import React from "react";
import { RxCross1 } from "react-icons/rx";

export default function ErrorField({
  showErrorField,
  setShowErrorField,
  errorField,
  setErrorField,
  closeErrorField,
}) {
  return (
    <div
      id="errorField"
      className={
        showErrorField
          ? "absolute top-[140px] flex items-center gap-4 bg-red-100 border border-secondary text-secondary rounded-lg mb-7 px-8 py-4 z-50 animate-fadeIn"
          : "hidden"
      }
    >
      <p>{errorField}</p>
      <button className="" onClick={closeErrorField}>
        <RxCross1
          size={24}
          className="font-bold transition duration-500 hover:rotate-90 hover:text-primary"
        />
      </button>
    </div>
  );
}
