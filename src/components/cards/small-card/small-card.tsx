import React from "react";
import "../small-card/styles.css";
import Text from "../../typography/text.tsx";
import ChangeIndicator, { ChangeIndicatorVariants } from "../../change-indicator/change-indicator.tsx";

interface SmallCardProps {
  title: string;
  number: string;
  indicatorVariant: ChangeIndicatorVariants;
  percent: string;
}

const SmallCard = ({ title, number, percent, indicatorVariant }: SmallCardProps) => {
  return (
    <div className="small-card-container">
      <Text variant="tinyText">{title}</Text>
      <Text variant="h1">{number}</Text>
      <ChangeIndicator variant={indicatorVariant} percent={percent} />
    </div>
  );
};

export default SmallCard;
