import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";

const HoverButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative flex items-center justify-center w-48 h-14 bg-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <span
          className={`absolute transition-transform duration-300 ${
            isHovered ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          Book Your Appointment
        </span>
        <FontAwesomeIcon
          icon={faStethoscope}
          className={`absolute text-2xl transition-transform duration-300 ${
            isHovered ? "-translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

export default HoverButton;
