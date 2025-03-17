import React from "react";
import "../content-table/styles.css";
import Text from "../../typography/text.tsx";
import DropdownComponent from "../../date-picker/index.tsx";
import TwoArrowUp from "../../icons/two-arrow-up.tsx";
import { colors } from "../../../theme/colors.tsx";
import { invoices, tableHeaders } from "../../../utils/table-data/index.tsx";
import TitleBar from "../../title-bar/index.tsx";

const formatCurrency = (value: number) => {
  const [whole, decimal] = value
    .toLocaleString("en-US", { minimumFractionDigits: 2 })
    .split(".");
  return (
    <>
      ${whole}
      <Text variant="smallText" color="lightText">
        .{decimal}
      </Text>
    </>
  );
};

const ContentTable = () => {
  return (
    <>
      <TitleBar
        titleBarContainerClassName="table-title-bar"
        titleBarTextContainerClassName="table-title-bar-text"
        titleBarTimeframeClassName="table-title-bar-text"
        leftTitleChildren={
          <>
            <Text variant="h1" className="h1-margin">
              Invoices
            </Text>
            <Text variant="bodyText" color="lightText">
              Open Balance
            </Text>
          </>
        }
        rightTimeframeChildren={
          <>
            <Text variant="bodyText">Filters</Text>
            <DropdownComponent
              variant="dropdown"
              dropdownName="Choose Accounts"
            />
          </>
        }
      />

      <table className="table-container">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} className="table-header">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text variant="smallText" color="lightText">
                    {header}
                  </Text>
                  <TwoArrowUp color={colors["darkText"]} size={8} />
                </div>
              </th>
            ))}
          </tr>
          {}
        </thead>
        <tbody>
          {invoices.map((row) => (
            <tr key={row.id} className="tr-item-list">
              <td>
                <Text variant="smallText">{row.invoice}</Text>
              </td>
              <td>
                <Text variant="smallText">{formatCurrency(row.amount)}</Text>
              </td>
              <td>
                <Text variant="smallText">{row.account}</Text>
              </td>
              <td>
                <Text variant="smallText">{row.manufacturer}</Text>
              </td>
              <td>
                <Text variant="smallText">{row.date}</Text>
              </td>
              <td>
                <Text variant="smallText">{row.dueDate}</Text>
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div className={`status status-${row.statusType}`}></div>
                  <Text
                    variant="smallText"
                    color={
                      row.statusType === "past"
                        ? "failureColor"
                        : "warningColor"
                    }
                  >
                    {row.status}
                  </Text>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContentTable;
