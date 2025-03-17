import React from "react";

const PlusIconOutlined = ({ size = 12, color = "none", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 6.5H8"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.5 5V8"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 6.5C2 2.79425 2.79425 2 6.5 2C10.2057 2 11 2.79425 11 6.5C11 10.2057 10.2057 11 6.5 11C2.79425 11 2 10.2057 2 6.5Z"
      stroke="white"
    />
  </svg>
);

export default PlusIconOutlined;
