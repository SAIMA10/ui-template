import React from "react";

const UsersIcon = ({ size = 12, color = "none", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4999 10.4999C10.4999 9.62915 9.6651 8.88835 8.4999 8.61375M7.4999 10.5C7.4999 9.39545 6.15675 8.5 4.4999 8.5C2.84305 8.5 1.4999 9.39545 1.4999 10.5M7.4999 7C8.60445 7 9.4999 6.10455 9.4999 5C9.4999 3.89543 8.60445 3 7.4999 3M4.4999 7C3.39533 7 2.4999 6.10455 2.4999 5C2.4999 3.89543 3.39533 3 4.4999 3C5.60445 3 6.4999 3.89543 6.4999 5C6.4999 6.10455 5.60445 7 4.4999 7Z"
      stroke="currentColor"
      stroke-width="0.9"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default UsersIcon;
