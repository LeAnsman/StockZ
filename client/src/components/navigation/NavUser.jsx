import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

export default function NavUser() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const openUserDropdown = () => {
    setShowUserDropdown(true);
  };

  const closeUserDropdown = () => {
    setShowUserDropdown(false);
  };

  return (
    <button type="button" onClick={openUserDropdown}>
      <AiOutlineUser
        size={32}
        className="transition duration-300 hover:fill-secondary"
      />
    </button>
  );
}
