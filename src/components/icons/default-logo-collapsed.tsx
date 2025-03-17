import React from "react";

const DefaultLogoCollapsed = ({
  height = 29,
  width = 32,
  color = "none",
  className = "",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 29"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_71_465)">
      <path
        d="M0 0.0166016L4.67949 8.33071C4.67949 8.33071 14.9206 7.06243 18.8276 0.0166016H0Z"
        fill="#FF9202"
      />
      <path
        d="M19.1912 10.7202V23.682L16.3129 29L10.5838 18.837C10.5838 18.837 12.1647 11.5815 19.1912 10.7202Z"
        fill="#1DACFF"
      />
      <path
        d="M32 0.0165768C32 0.0165768 13.0128 -1.27048 10.5837 18.837C10.5837 18.837 13.2384 10.1011 27.1608 8.80781L32 0.0165768Z"
        fill="#FF9202"
      />
    </g>
    <defs>
      <clipPath id="clip0_71_465">
        <rect width="32" height="29" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DefaultLogoCollapsed;
