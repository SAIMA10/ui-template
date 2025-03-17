import React, { ReactNode } from "react";

interface TitleBarProps {
  leftTitleChildren: ReactNode;
  titleBarContainerClassName: string;
  titleBarTextContainerClassName: string;
  titleBarTimeframeClassName: string;
  rightTimeframeChildren: ReactNode;
}

const TitleBar = ({
  leftTitleChildren,
  titleBarContainerClassName,
  titleBarTextContainerClassName,
  titleBarTimeframeClassName,
  rightTimeframeChildren,
}: TitleBarProps) => {

  return (
    <div className={titleBarContainerClassName}>
      <div className={titleBarTextContainerClassName}>
        {leftTitleChildren}
      </div>
      <div className={titleBarTimeframeClassName}>
        {rightTimeframeChildren}
      </div>
    </div>
  );
};

export default TitleBar;
