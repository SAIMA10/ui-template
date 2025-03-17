import React from "react";

const ArrowIcon = ({
  height = 7,
  width = 10,
  color = "none",
  className = "",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.80979 6.03891C5.50064 6.34806 4.99936 6.34806 4.69021 6.03891L0.731871 2.08059C0.42271 1.77142 0.42271 1.27017 0.731871 0.960997C1.04104 0.651836 1.54229 0.651836 1.85146 0.960997L5.25 4.35955L8.64855 0.960997C8.95769 0.651836 9.45897 0.651836 9.76812 0.960997C10.0773 1.27017 10.0773 1.77142 9.76812 2.08059L5.80979 6.03891Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowIcon;
