import React from "react";

const DashboardIcon = ({ size = 12, color = "none", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 13"
    fill="none"
    stroke="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.9999 6.5C5.9999 6.22385 6.22375 6 6.4999 6H9.4999C9.77605 6 9.9999 6.22385 9.9999 6.5V10C9.9999 10.2761 9.77605 10.5 9.4999 10.5H6.4999C6.22375 10.5 5.9999 10.2761 5.9999 10V6.5Z"
      stroke="currentColor"
      stroke-width="0.9"
      stroke-linecap="round"
    />
    <path
      d="M1.9999 3C1.9999 2.72386 2.22376 2.5 2.4999 2.5H3.9999C4.27604 2.5 4.4999 2.72386 4.4999 3V10C4.4999 10.2761 4.27604 10.5 3.9999 10.5H2.4999C2.22376 10.5 1.9999 10.2761 1.9999 10V3Z"
      stroke="currentColor"
      stroke-width="0.9"
      stroke-linecap="round"
    />
    <path
      d="M5.9999 3C5.9999 2.72386 6.22375 2.5 6.4999 2.5H9.4999C9.77605 2.5 9.9999 2.72386 9.9999 3V4C9.9999 4.27614 9.77605 4.5 9.4999 4.5H6.4999C6.22375 4.5 5.9999 4.27614 5.9999 4V3Z"
      stroke="currentColor"
      stroke-width="0.9"
      stroke-linecap="round"
    />
  </svg>
);

export default DashboardIcon;
