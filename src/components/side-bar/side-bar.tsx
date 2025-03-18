import React from "react";
import "../side-bar/styles.css";
import Button from "../button/button.tsx";
import DefaultLogo from "../icons/default-logo.tsx";
import DefaultLogoCollapsed from "../icons/default-logo-collapsed.tsx";
import Divider from "../divider/divider.tsx";
import {
  sideBarButtonActions,
  sideBarButtons,
  sideBarButtonsMenu,
} from "../../utils/side-bar-buttons/index.tsx";
import {
  SideBarActionsIcons,
  SideBarIcons,
  SideBarMenuIcons,
} from "../icons/index.tsx";
import { colors } from "../../theme/colors.tsx";
import PlusIconOutlined from "../icons/plus-icon-outlined.tsx";

const SideBar = ({ closeSidebar, toggleSidebar }) => {
  return (
    <div className="side-bar-container">
      <div style={{ marginBottom: "32px" }}>
        {closeSidebar ? <DefaultLogoCollapsed /> : <DefaultLogo />}
      </div>
      {closeSidebar ? (
        <Button
          variant="icon"
          children={undefined}
          className="side-bar-button side-bar-button-new"
          icon={<PlusIconOutlined />}
        ></Button>
      ) : (
        <Button variant="primary" className="side-bar-button" icon={<PlusIconOutlined />}>
          New
        </Button>
      )}
      <div style={{ marginBottom: "32px" }}>
        <Divider />
      </div>
      <div style={{ marginBottom: "32px" }}>
        {sideBarButtons.map((button) => {
          const Icon = SideBarIcons[button.icon];
          return closeSidebar ? (
            <Button
              variant="icon"
              className="side-bar-button-list"
              icon={<Icon />}
              children={undefined}
            ></Button>
          ) : (
            <Button
              variant="ghost"
              className="side-bar-button-list"
              icon={<Icon />}
            >
              {button.display_name}
            </Button>
          );
        })}
      </div>
      <div style={{ marginBottom: "32px" }}>
        <Divider />
      </div>
      <div style={{ marginBottom: "149px" }}>
        {sideBarButtonsMenu.map((button) => {
          const Icon = SideBarMenuIcons[button.icon];
          return closeSidebar ? (
            <Button
              variant="icon"
              className="side-bar-button-list"
              icon={<Icon />}
              children={undefined}
            ></Button>
          ) : (
            <Button
              variant="ghost"
              className="side-bar-button-list"
              icon={<Icon />}
            >
              {button.display_name}
            </Button>
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: colors["white"],
          borderRadius: "16px",
          paddingTop: "8px",
          bottom: 0,
          position: "sticky",
        }}
      >
        {sideBarButtonActions.map((button) => {
          const Icon = SideBarActionsIcons[button.icon];
          const closeSideBarBtn = button.value === "closeSidebar";
          return closeSidebar ? (
            <Button
              variant="icon"
              className={"side-bar-button-list"}
              icon={<Icon />}
              onClick={
                closeSideBarBtn
                  ? () => toggleSidebar()
                  : () => {
                      console.log("not close btn");
                    }
              }
              children={undefined}
            ></Button>
          ) : (
            <Button
              variant="ghost"
              className="side-bar-button-list"
              icon={<Icon />}
              onClick={
                closeSideBarBtn
                  ? () => toggleSidebar()
                  : () => {
                      console.log("not close btn");
                    }
              }
            >
              {button.display_name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
