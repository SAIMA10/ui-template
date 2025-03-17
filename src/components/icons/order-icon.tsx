import React from "react";

const OrderIcon = ({ size = 12, color = "none", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 13"
    fill={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0586 1.28545C10.0248 1.20112 9.96654 1.12885 9.89128 1.07797C9.81601 1.02709 9.72722 0.99993 9.63636 1H2.36364C2.27278 0.99993 2.18399 1.02709 2.10872 1.07797C2.03346 1.12885 1.97516 1.20112 1.94136 1.28545L1.03227 3.55818C1.01097 3.61201 1.00002 3.66938 1 3.72727V10.5455C1 10.666 1.04789 10.7816 1.13313 10.8669C1.21838 10.9521 1.33399 11 1.45455 11H10.5455C10.666 11 10.7816 10.9521 10.8669 10.8669C10.9521 10.7816 11 10.666 11 10.5455V3.72727C11 3.66938 10.989 3.61201 10.9677 3.55818L10.0586 1.28545ZM2.67136 1.90909H9.32864L9.87409 3.27273H2.12591L2.67136 1.90909ZM1.90909 10.0909V4.18182H10.0909V10.0909H1.90909ZM5.54545 8.72727C5.54545 8.84783 5.49756 8.96344 5.41232 9.04869C5.32708 9.13393 5.21146 9.18182 5.09091 9.18182H3.27273C3.15217 9.18182 3.03656 9.13393 2.95132 9.04869C2.86607 8.96344 2.81818 8.84783 2.81818 8.72727C2.81818 8.60672 2.86607 8.4911 2.95132 8.40586C3.03656 8.32062 3.15217 8.27273 3.27273 8.27273H5.09091C5.21146 8.27273 5.32708 8.32062 5.41232 8.40586C5.49756 8.4911 5.54545 8.60672 5.54545 8.72727Z"
      stroke="currentColor"
      strokeWidth="0.05"
      fill="currentColor"
    />
  </svg>
);

export default OrderIcon;
