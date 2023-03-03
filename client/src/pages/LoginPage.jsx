import React from "react";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center sm:w-1/2 mx-auto min-h-[calc(100vh-225px)] sm:min-h-[calc(100vh-168px)] animate-fadeIn">
      <LoginForm />
    </div>
  );
}
