import React from "react";
import { RxCross1 } from "react-icons/rx";

export default function ErrorField({
  showErrorField,
  setShowErrorField,
  errorField,
  setErrorField,
}) {
  const closeErrorField = () => {
    setShowErrorField(false);
    setErrorField("");
  };
  return (
    <div className="flex justify-center items-end">
      <div
        className={
          showErrorField
            ? "absolute flex items-center gap-4 bg-red-100 border border-secondary text-secondary rounded-lg mb-5 px-8 py-6 z-50 animate-fadeIn"
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
    </div>
  );
}
