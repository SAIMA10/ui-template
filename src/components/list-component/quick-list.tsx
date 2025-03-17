import React from "react";
import "../list-component/styles.css";
import Text from "../typography/text.tsx";
import RightArrowIcon from "../icons/right-arrow.tsx";
import TwoArrowUp from "../icons/two-arrow-up.tsx";
import ChangeIndicator from "../change-indicator/change-indicator.tsx";

interface IListItem {
  name: string;
  number: string;
  percent: string;
}

interface QuickListProps {
  listTitle: string;
  items: IListItem[];
}

const QuickList = ({ listTitle, items }: QuickListProps) => {
  return (
    <div className="quick-list-container">
      <div className="quick-list-title">
        <Text variant="tinyText">{listTitle}</Text>
        <RightArrowIcon className="quick-list-icon" />
      </div>
      {items.map((item) => (
        <div className="quick-list-item-container">
          <Text variant="tinyText" color="lightText">
            {item.name}
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Text variant="tinyText" color="darkText">
              {item.number}
            </Text>
            <ChangeIndicator variant="positive" percent={item.percent} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickList;
