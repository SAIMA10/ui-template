import React from "react";

const LinkIcon = ({ size = 12, color = "none", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.9999 6.5C6.9999 7.8807 5.8806 9 4.4999 9H3.4999C2.11919 9 0.999901 7.8807 0.999901 6.5C0.999901 5.11929 2.11919 4 3.4999 4H3.7499M4.9999 6.5C4.9999 5.11929 6.1192 4 7.4999 4H8.4999C9.8806 4 10.9999 5.11929 10.9999 6.5C10.9999 7.8807 9.8806 9 8.4999 9H8.2499"
      stroke="currentColor"
      stroke-width="0.9"
      stroke-linecap="round"
    />
  </svg>
);

export default LinkIcon;
