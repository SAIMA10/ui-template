import React from "react";

const PaymentIcon = ({ size = 12, color = "none", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 13"
    fill={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 11C8.48528 11 10.5 8.98528 10.5 6.5C10.5 4.01472 8.48528 2 6 2C3.51472 2 1.5 4.01472 1.5 6.5C1.5 8.98528 3.51472 11 6 11Z"
      stroke="currentColor"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.25 5.04167L7.17815 4.98178C6.9984 4.83202 6.7719 4.75 6.53795 4.75H5.375C4.89175 4.75 4.5 5.14175 4.5 5.625C4.5 6.10825 4.89175 6.5 5.375 6.5H6.625C7.10825 6.5 7.5 6.89175 7.5 7.375C7.5 7.85825 7.10825 8.25 6.625 8.25H5.206C4.94565 8.25 4.69557 8.14845 4.50891 7.967L4.5 7.95835"
      stroke="currentColor"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 4.5V4"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 9V8.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default PaymentIcon;
