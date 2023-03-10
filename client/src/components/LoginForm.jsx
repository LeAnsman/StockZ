import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import PrimaryButton from "./PrimaryButton";
import TogglePassword from "./TogglePassword";

export default function LoginForm({ setErrorField }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const toggleShowPassword = () => {
    setPasswordShown(!passwordShown);
  };

  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        username,
        password,
      });
      setUser(data);
      if (data.user) {
        navigate("/");
      }
    } catch (err) {
      setErrorField(err.response.data.error);
    }
  };

  let inputClassName =
    "peer h-12 w-full border-2 px-4 border-gray-300 rounded-md shadow-md placeholder-transparent focus:outline-none focus:border-primary  focus:ring-primary";
  let labelClassName =
    "absolute p-2 left-3 -top-5 bg-white text-primary text-sm transition-all peer-placeholder-shown:p-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:text-primary peer-focus:text-sm";

  return (
    <form
      className="flex flex-col items-center gap-8 w-full my-8"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full">
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={inputClassName}
          placeholder="username"
        />
        <label htmlFor="username" className={labelClassName}>
          Username
        </label>
      </div>

      <div className="relative w-full">
        <input
          type={passwordShown ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClassName}
          placeholder="password"
        />
        <label htmlFor="password" className={labelClassName}>
          Password
        </label>
      </div>

      <TogglePassword
        passwordShown={passwordShown}
        toggleShowPassword={toggleShowPassword}
      />
      <PrimaryButton type="submit">Login</PrimaryButton>

      <Link
        to={"/register"}
        className="link__item transition duration-500 hover:text-white"
      >
        Not part of the warehouse yet ?
      </Link>
    </form>
  );
}
