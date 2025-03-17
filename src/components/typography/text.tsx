import React, { ReactNode } from "react";
import "../typography/styles.css";
import { colors } from "../../theme/colors.tsx";

type TextVariant =
  | "h1"
  | "bodyText"
  | "smallText"
  | "tinyText"
  | "numberBig"
  | "numbersSmall";

type ColorVariant = keyof typeof colors;

type TextProps = {
  children: ReactNode;
  variant: TextVariant;
  className?: string;
  color?: ColorVariant;
};

const Text: React.FC<TextProps> = ({
  children,
  variant = "smallText",
  className = "",
  color = "darkText",
}) => {
  const baseClass = "text";
  const variantClass = `text-${variant}`;

  const isHeading = variant === "h1";

  return isHeading ? (
    <h1
      className={`${baseClass} ${variantClass} ${className || ""}`}
      style={{ color: color ? colors[color] : "black" }}
    >
      {children}
    </h1>
  ) : (
    <span
      className={`${baseClass} ${variantClass} ${className || ""}`}
      style={{ color: color ? colors[color] : "black" }}
    >
      {children}
    </span>
  );
};

export default Text;
