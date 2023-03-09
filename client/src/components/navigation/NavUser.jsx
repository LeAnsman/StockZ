import axios from "axios";
import React, { useContext, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { UserContext } from "../../context/UserContext";
import Dropdown from "../Dropdown";

export default function NavUser({ user }) {
  const { setUser } = useContext(UserContext);

  const logout = (e) => {
    e.preventDefault();
    axios.get("/logout");
    setTimeout(() => {
      setUser(null);
    }, 100);
  };
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <AiOutlineUser
            size={32}
            className="cursor-pointer transition duration-300 hover:fill-primary"
          />
        </Dropdown.Trigger>
        <Dropdown.Content contentClasses="">
          {user ? (
            <>
              <Dropdown.Link to={"/profile"} className={"rounded-t-lg"}>
                Profile
              </Dropdown.Link>
              <Dropdown.Button onClick={logout} className={"rounded-b-lg"}>
                Logout
              </Dropdown.Button>
            </>
          ) : (
            <>
              <Dropdown.Link to={"/login"} className={"rounded-t-lg"}>
                Login
              </Dropdown.Link>
              <Dropdown.Link to={"/register"} className={"rounded-b-lg "}>
                Register
              </Dropdown.Link>
            </>
          )}
        </Dropdown.Content>
      </Dropdown>
    </>
  );
}
