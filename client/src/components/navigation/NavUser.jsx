import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import Dropdown from "../Dropdown";

export default function NavUser() {
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <AiOutlineUser
            size={32}
            className="cursor-pointer transition duration-300 hover:fill-primary"
          />
        </Dropdown.Trigger>
        <Dropdown.Content contentClasses="font-Jost font-medium uppercase text-2xl tracking-wider">
          <Dropdown.Link to={"/login"} className={"rounded-t-lg"}>
            Login
          </Dropdown.Link>
          <Dropdown.Link to={"/register"} className={"rounded-b-lg"}>
            Register
          </Dropdown.Link>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
}
