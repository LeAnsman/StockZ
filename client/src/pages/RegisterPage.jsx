import React, { useEffect, useState } from "react";
import ErrorField from "../components/ErrorField";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  const [errorField, setErrorField] = useState("");
  const [showErrorField, setShowErrorField] = useState(false);
  useEffect(() => {
    if (errorField?.length > 0) {
      setShowErrorField(true);
    }
  }, [errorField]);
  return (
    <>
      <ErrorField
        showErrorField={showErrorField}
        setShowErrorField={setShowErrorField}
        errorField={errorField}
        setErrorField={setErrorField}
      />
      <div className="flex justify-center items-center sm:w-1/2 mx-auto min-h-[calc(100vh-225px)] sm:min-h-[calc(100vh-168px)] animate-fadeIn">
        <RegisterForm setErrorField={setErrorField} />
      </div>
    </>
  );
}
