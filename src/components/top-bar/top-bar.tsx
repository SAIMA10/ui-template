import React from "react";
import "../top-bar/styles.css";
import Breadcrumbs from "../breadcrumbs/breadcrumbs.tsx";
import { breadcrumbsItems } from "../../utils/breadcrumbs/index.tsx";
import profileImage from "../../assets/icons/profile-image.png";
import Text from "../typography/text.tsx";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-breadcrumbs">
        <Breadcrumbs items={breadcrumbsItems} />
      </div>
      <div className="top-bar-profile">
        <div className="top-bar-profile-text">
          <Text variant="bodyText" className="top-bar-text">
            Tyler Baum
            <Text variant="smallText" color="lightText" className="top-bar-text">
              Admin
            </Text>
          </Text>
        </div>
        <img src={profileImage} alt="Profile"></img>
      </div>
    </div>
  );
};

export default TopBar;
