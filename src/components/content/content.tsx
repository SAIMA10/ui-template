import React from "react";
import "../content/styles.css";
import ContentContainer from "./content-container/index.tsx";
import Divider from "../divider/divider.tsx";
import ContentTable from "./content-table/index.tsx";
import TitleBar from "../title-bar/index.tsx";
import Text from "../typography/text.tsx";
import DropdownComponent from "../date-picker/index.tsx";
import Button from "../button/button.tsx";

const timeframeButtons = ["YTD", "MTD"];

const Content = () => {
  return (
    <div className="content-container">
      <div style={{ marginBottom: "32px" }}>
        <TitleBar
          titleBarContainerClassName="title-bar-container"
          titleBarTextContainerClassName="title-bar-text-container"
          leftTitleChildren={
            <>
              <Text
                variant="bodyText"
                color="lightText"
                className="title-bar-text"
              >
                Distributors
              </Text>
              <Text variant="h1" className="title-bar-text">
                Nexus Medical
              </Text>
            </>
          }
          titleBarTimeframeClassName="title-bar-timeframe-buttons"
          rightTimeframeChildren={
            <>
              <Text variant="bodyText">Timeframe</Text>
              <DropdownComponent variant="date-picker" />
              {timeframeButtons.map((btn) => {
                return (
                  <Button variant="timeframe" className={""}>
                    {btn}
                  </Button>
                );
              })}
            </>
          }
        />
      </div>
      <div>
        <ContentContainer />
        <div style={{ width: "100%", marginTop: "32px", marginBottom: "32px" }}>
          <Divider />
        </div>
        <ContentTable />
      </div>
    </div>
  );
};

export default Content;
