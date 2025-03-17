import React, { useMemo } from "react";
import TwoArrowUp from "../icons/two-arrow-up.tsx";
import Text from "../typography/text.tsx";
import TwoArrowDown from "../icons/two-arrow-down.tsx";
import { colors } from "../../theme/colors.tsx";

export type ChangeIndicatorVariants = "positive" | "negative" | "blue" | "white";

interface ChangeIndicatorProps {
  variant: ChangeIndicatorVariants;
  percent: string;
}

const ChangeIndicator = ({ variant, percent }: ChangeIndicatorProps) => {
  const bgColor = useMemo(() => {
    if (variant === "positive") {
      return "successColor";
    } else if (variant === "negative") {
      return "failureColor";
    } else if (variant === "blue") {
      return "primaryColor";
    } else {
      return "white";
    }
  }, [variant]);

  const indicatorIcon = useMemo(() => {
    if (variant === "positive") {
      return <TwoArrowUp color={colors["white"]} />;
    } else if (variant === "negative") {
      return <TwoArrowDown />;
    }
  }, [variant]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        backgroundColor: colors[bgColor],
      }}
      className="card-title-number"
    >
      {indicatorIcon}
      <Text
        variant="tinyText"
        color={variant === "white" ? "darkText" : "white"}
      >
        {percent}
      </Text>
    </div>
  );
};

export default ChangeIndicator;
