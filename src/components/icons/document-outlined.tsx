import React from "react";

const DocumentOutlined = ({ size = 12, color = "none", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 13"
    fill={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 3.5V10C2 10.8284 2.67157 11.5 3.5 11.5H8.5C9.32845 11.5 10 10.8284 10 10V5C10 4.17157 9.32845 3.5 8.5 3.5H2ZM2 3.5V3"
      stroke="currentColor"
      stroke-width="0.75"
    />
    <path
      d="M9 3.49996V3.87496H9.375V3.49996H9ZM2.53554 3.87496H9V3.12496H2.53554V3.87496ZM9.375 3.49996V2.65297H8.625V3.49996H9.375ZM7.80555 1.29179L2.40676 2.06304L2.51283 2.8055L7.9116 2.03425L7.80555 1.29179ZM2.40676 2.06304C1.95819 2.12712 1.625 2.5113 1.625 2.96442H2.375C2.375 2.88453 2.43374 2.8168 2.51283 2.8055L2.40676 2.06304ZM9.375 2.65297C9.375 1.81621 8.6339 1.17345 7.80555 1.29179L7.9116 2.03425C8.28815 1.98046 8.625 2.27262 8.625 2.65297H9.375ZM2.53554 3.12496C2.44688 3.12496 2.375 3.05308 2.375 2.96442H1.625C1.625 3.4673 2.03266 3.87496 2.53554 3.87496V3.12496Z"
      stroke="currentColor"
      strokeWidth="0.05"
      fill="currentColor"
    />
    <path
      d="M4 6.5H8"
      stroke="currentColor"
      stroke-width="0.75"
      stroke-linecap="round"
    />
    <path
      d="M4 8.25H6.75"
      stroke="currentColor"
      stroke-width="0.75"
      stroke-linecap="round"
    />
  </svg>
);

export default DocumentOutlined;
