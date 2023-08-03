import React from "react";

const BrandingIcon = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 79.5H59.5V69.5V20.5H20.5H10.5H0.5V79.5Z" fill="#EF233C" />
      <path
        d="M59.5 69.5H69.5V59.5V10.5H20.5H10.5V20.5H20.5H59.5V69.5Z"
        fill="#EF233C"
        fillOpacity="0.6"
      />
      <path
        d="M79.5 0.5H20.5V10.5H69.5V59.5H79.5V0.5Z"
        fill="#EF233C"
        fillOpacity="0.2"
      />
      <path
        d="M59.5 69.5H69.5V59.5M59.5 69.5V20.5H20.5H10.5M59.5 69.5V79.5H0.5V20.5H10.5M10.5 20.5V10.5H20.5M69.5 59.5H79.5V0.5H20.5V10.5M69.5 59.5V10.5H20.5"
        stroke="black"
        strokeWidth="0.6"
      />
    </svg>
  );
};

export default BrandingIcon;
