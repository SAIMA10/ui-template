import React from "react";
import "../cards/styles.css";
import Text from "../typography/text.tsx";
import { colors } from "../../theme/colors.tsx";
import ChangeIndicator, { ChangeIndicatorVariants } from "../change-indicator/change-indicator.tsx";

type ColorVariant = keyof typeof colors;

interface CardProps {
  topText?: string;
  topNumber?: string;
  cardTitleA: string;
  cardTitleANumber: string;
  cardTitleValueA1Color?: ColorVariant;
  cardTitleValueA1: Number;
  cardTitleValueA2?: Number;
  cardTitleB?: string;
  cardValueB1Color?: ColorVariant;
  cardValueB1?: Number;
  cardValueB2?: Number;
  topIndicatorVariant?: ChangeIndicatorVariants
  cardTitleAVariant?: ChangeIndicatorVariants
}

const formatNumber = (value?: Number) =>
  value !== undefined
    ? value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "0.00";

const Card = ({
  topText,
  topNumber,
  cardTitleA,
  cardTitleANumber,
  cardTitleValueA1Color,
  cardTitleValueA1,
  cardTitleValueA2,
  cardTitleB,
  cardValueB1Color,
  cardValueB1,
  cardValueB2,
  topIndicatorVariant,
  cardTitleAVariant,
}: CardProps) => {
  const [whole, decimal] = formatNumber(cardTitleValueA1).split(".");
  const [whole2, decimal2] = formatNumber(cardTitleValueA2).split(".");

  return (
    <div className={topText ? "full-card-container" : ""}>
      {topText && (
        <div className="top-card-container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text variant="tinyText" className="card-title-text-position ">
              {topText}
            </Text>
            <ChangeIndicator variant={topIndicatorVariant ?? "white"} percent={topNumber ?? ""} />
          </div>
        </div>
      )}

      <div className={topText ? "card-container-top-header" : "card-container"}>
        {/* Titles */}
        <div style={{ marginBottom: "16px" }}>
          <>
            {cardTitleB ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text variant="tinyText" className="card-title-text">
                    {cardTitleA}
                  </Text>
                  <ChangeIndicator variant={cardTitleAVariant ?? "blue"} percent={cardTitleANumber} />
                </div>
                <Text variant="tinyText" className="card-title-text-position">
                  {cardTitleB}
                </Text>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Text variant="tinyText" className="card-title-text">
                  {cardTitleA}
                </Text>
                <ChangeIndicator variant={cardTitleAVariant ?? "blue"} percent={cardTitleANumber} />
              </div>
            )}
          </>
        </div>

        {/* Values */}
        {cardValueB1 ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {cardTitleValueA2 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Text
                  variant="numberBig"
                  color={cardTitleValueA1Color ?? "darkText"}
                >
                  ${whole}
                  <Text variant="numberBig" color="strokeDark">
                    .{decimal}
                  </Text>
                </Text>
                <Text variant="numberBig">
                  ${whole2}
                  <Text variant="numberBig" color="strokeDark">
                    .{decimal2}
                  </Text>
                </Text>
              </div>
            ) : (
              <Text
                variant="numberBig"
                color={cardTitleValueA1Color ?? "darkText"}
              >
                ${whole}
                <Text variant="numberBig" color="strokeDark">
                  .{decimal}
                </Text>
              </Text>
            )}

            {cardValueB2 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Text
                  variant="numberBig"
                  color={cardValueB1Color ?? "darkText"}
                >
                  {String(cardValueB1)}
                </Text>
                <Text variant="numberBig">{String(cardValueB2)}</Text>
              </div>
            ) : (
              <Text variant="numberBig" color={cardValueB1Color ?? "darkText"}>
                {String(cardValueB1)}
              </Text>
            )}
          </div>
        ) : (
          <Text variant="numberBig" color={cardTitleValueA1Color ?? "darkText"}>
            ${whole}
            <Text variant="numberBig" color="strokeDark">
              .{decimal}
            </Text>
          </Text>
        )}
      </div>
    </div>
  );
};

export default Card;
