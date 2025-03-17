import React, { useState } from "react";
import Button from "../button/button.tsx";
import { format } from "date-fns";
import ArrowIcon from "../icons/arrow-down.tsx";
import "../date-picker/styles.css";

interface DropdownProps {
  variant: "date-picker" | "dropdown";
  dropdownName?: string;
}

const DropdownComponent = ({ variant, dropdownName }: DropdownProps) => {
  // const [showPicker, setShowPicker] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date(new Date().getFullYear(), 0, 1)
  );
  const [endDate, setEndDate] = useState(new Date());

  // const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStartDate(new Date(e.target.value));
  // };

  // const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEndDate(new Date(e.target.value));
  // };

  return variant === "date-picker" ? (
    <Button
      variant="timeframe"
      icon={<ArrowIcon />}
      className="date-picker-btn"
    >
      {format(startDate, "MMM d")} - {format(endDate, "MMM d")}
    </Button>
  ) : (
    <Button
      variant="timeframe"
      icon={<ArrowIcon />}
      className="date-picker-btn"
    >
      {dropdownName}
    </Button>
  );
};

export default DropdownComponent;
