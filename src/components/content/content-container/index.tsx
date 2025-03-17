import React from "react";
import Card from "../../cards/index.tsx";
import "../content-container/styles.css";
import SmallCard from "../../cards/small-card/small-card.tsx";
import QuickList from "../../list-component/quick-list.tsx";
import GraphComponent from "../../graph-component/index.tsx";

const ContentContainer = () => {
  const valueA1 = 2921213.0;
  const valueA2 = 24921223.0;
  const valueB = 103;

  const listItems1 = [
    {
      name: "Obi-Wan Kenobi",
      number: "$12,345",
      percent: "12.3%",
    },
    {
      name: "Gyn Erso Buturatatata",
      number: "$12,345",
      percent: "12.3%",
    },
    {
      name: "Darth Vader",
      number: "$12,345",
      percent: "12.3%",
    },
  ];

  const listItems2 = [
    {
      name: "Empire Biologix",
      number: "$12,345",
      percent: "12.3%",
    },
    {
      name: "Tatooinine Barbabcoola",
      number: "$12,345",
      percent: "12.3%",
    },
    {
      name: "Verylong Namebrand Biolabs United",
      number: "$12,345",
      percent: "12.3%",
    },
  ];

  return (
    <div className="content-container-parent">
      <div className="content-container-left">
        <Card
          topText="Sales"
          topNumber="12.3%"
          topIndicatorVariant="white"
          cardTitleA="Realized / Current Sales"
          cardTitleAVariant="blue"
          cardTitleANumber="12.3%"
          cardTitleValueA1={valueA1}
          cardTitleValueA2={valueA2}
          cardTitleB="Card Title B"
          cardValueB1={valueB}
          cardValueB2={valueB}
        />
        <Card
          cardTitleA="Past Due / Open Balance"
          cardTitleAVariant="blue"
          cardTitleANumber="12.3%"
          cardTitleValueA1={valueA1}
          cardTitleValueA1Color="failureColor"
          cardTitleValueA2={valueA2}
          cardTitleB="Card Title B"
          cardValueB1={valueB}
          cardValueB1Color="failureColor"
          cardValueB2={valueB}
        />
        <div style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
          <SmallCard
            title="Title"
            number="71"
            percent="12.3%"
            indicatorVariant="positive"
          />
          <SmallCard
            title="Title"
            number="71"
            percent="12.3%"
            indicatorVariant="positive"
          />
        </div>
      </div>
      <div className="content-container-middle">
        <GraphComponent />
      </div>
      <div className="content-container-right">
        <QuickList listTitle="Top Performers" items={listItems1} />
        <QuickList listTitle="Top Manufacturers" items={listItems2} />
      </div>
    </div>
  );
};

export default ContentContainer;
