import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

export default function ErrorField({
  showErrorField,
  setShowErrorField,
  errorField,
  setErrorField,
}) {
  const closeErrorField = () => {
    const errorField = document.querySelector(`#errorField`);

    errorField.classList.add("animate-fadeOut");
    setTimeout(() => {
      setShowErrorField(false);
      setErrorField("");
    }, 300);
  };

  useEffect(() => {
    if (errorField?.length > 0) {
      setShowErrorField(true);
      setTimeout(() => {
        closeErrorField();
      }, 5000);
    }
  }, [errorField]);
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
