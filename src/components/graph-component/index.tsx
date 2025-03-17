import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { colors } from "../../theme/colors.tsx";
import "../graph-component/styles.css";
import Text from "../typography/text.tsx";
import ChangeIndicator from "../change-indicator/change-indicator.tsx";

const data = [
  { month: "Jan", currentSales: 20, realizedSales: 10 },
  { month: "Feb", currentSales: 30, realizedSales: 20 },
  { month: "Mar", currentSales: 50, realizedSales: 40 },
  { month: "Apr", currentSales: 60, realizedSales: 50 },
  { month: "May", currentSales: 80, realizedSales: 70 },
  { month: "Jun", currentSales: 100, realizedSales: 90 },
  { month: "Jul", currentSales: 110, realizedSales: 100 },
  { month: "Aug", currentSales: 130, realizedSales: 120 },
  { month: "Sep", currentSales: 140, realizedSales: 130 },
  { month: "Oct", currentSales: 160, realizedSales: 150 },
  { month: "Nov", currentSales: 170, realizedSales: 160 },
  { month: "Dec", currentSales: 180, realizedSales: 170 },
];

const GraphComponent = () => {
  return (
    <div className="graph-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="graph-container-title-left">
          <Text variant="tinyText">Sales Report</Text>
          <ChangeIndicator variant="positive" percent="12.3%" />
          <Text variant="tinyText" color="lightText">
            vs prev. period{" "}
          </Text>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="graph-container-legend">
            <Text variant="tinyText">Current Sales</Text>
            <div style={{ gap: "4px", display: "flex" }}>
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "5px",
                    height: "1px",
                    backgroundColor: colors["lightText"],
                    borderRadius: "4px",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="graph-container-legend">
            <Text variant="tinyText">Realized Sales</Text>
            <div
              style={{
                width: "40px",
                height: "4px",
                backgroundColor: colors["primaryColor"],
                borderRadius: "4px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "black", fontSize: 14 }} />
          <YAxis hide />

          <Line
            type="monotone"
            dataKey="currentSales"
            stroke={colors["strokeDark"]}
            strokeWidth={4}
            strokeDasharray="8 8"
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="realizedSales"
            stroke={colors["primaryColor"]}
            strokeWidth={5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphComponent;
