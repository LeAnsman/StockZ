import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function () {
  return (
    <div className="flex gap-8 py-4">
      <a href="https://github.com/LeAnsman" target="_blank">
        <BsGithub
          size={24}
          className="transition duration-300 hover:fill-primary"
        />
      </a>
      <a href="https://www.linkedin.com/in/anselme-dor/" target="_blank">
        <BsLinkedin
          size={24}
          className="transition duration-300 hover:fill-primary"
        />
      </a>
    </div>
  );
}
