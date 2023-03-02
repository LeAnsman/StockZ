import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorField from "./ErrorField";
import PrimaryButton from "./PrimaryButton";
import TogglePassword from "./TogglePassword";

export default function RegisterForm({
  setErrorField,
}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  let isSamePassword = false;
  let inputClassName =
    "peer h-12 w-full border-2 px-4 border-gray-300 rounded-md shadow-md placeholder-transparent focus:outline-none focus:border-primary  focus:ring-primary";
  let labelClassName =
    "absolute p-2 left-3 -top-5 bg-white text-primary text-sm transition-all peer-placeholder-shown:p-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:text-primary peer-focus:text-sm";

  if (password == passwordConfirm) {
    isSamePassword = true;
  }

  const toggleShowPassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 6) {
      setErrorField("The username should contain at least 6 characters.");
    } else if (password.length < 8 || password.length > 24) {
      setErrorField(
        "The password should contain at least 8 characters and maximum 24 characters."
      );
    } else if (!isSamePassword) {
      setErrorField("The password and the password confirmation must match.");
    }
    // send data
  };

  return (
    <form
      className="flex flex-col items-center gap-8 w-full my-8"
      onSubmit={handleSubmit}
    >
      <div class="relative w-full">
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={inputClassName}
          placeholder="username"
          min={3}
          max={20}
          required
        />
        <label htmlFor="username" className={labelClassName}>
          Username
        </label>
      </div>
      <div class="relative w-full">
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClassName}
          placeholder="email"
          required
        />
        <label htmlFor="email" className={labelClassName}>
          Email Address
        </label>
      </div>
      <div class="relative w-full">
        <input
          type={passwordShown ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClassName}
          placeholder="password"
          required
        />
        <label htmlFor="password" className={labelClassName}>
          Password
        </label>
      </div>
      <div class="relative w-full">
        <input
          type={passwordShown ? "text" : "password"}
          name="password_confirm"
          id="password_confirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className={inputClassName}
          placeholder="password_confirm"
          required
        />
        <label htmlFor="password_confirm" className={labelClassName}>
          Password confirmation
        </label>
      </div>
      <TogglePassword
        passwordShown={passwordShown}
        toggleShowPassword={toggleShowPassword}
      />
      <PrimaryButton
        className={"w-3/4 sm:w-1/2 2xl:w-1/3 mx-auto"}
        type="submit"
      >
        Register
      </PrimaryButton>
      <Link to={"/login"} className="text-center">
        Already part of the warehouse ?
      </Link>
    </form>
  );
}
