import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = () => {
  const data = [
    {
      country: "AD",
      "hot dog": 56,
      "hot dogColor": "hsl(131, 70%, 50%)",
      burger: 19,
      burgerColor: "hsl(207, 70%, 50%)",
      sandwich: 37,
      sandwichColor: "hsl(351, 70%, 50%)",
      kebab: 18,
      kebabColor: "hsl(353, 70%, 50%)",
      fries: 109,
      friesColor: "hsl(335, 70%, 50%)",
      donut: 185,
      donutColor: "hsl(136, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 76,
      "hot dogColor": "hsl(201, 70%, 50%)",
      burger: 66,
      burgerColor: "hsl(266, 70%, 50%)",
      sandwich: 48,
      sandwichColor: "hsl(45, 70%, 50%)",
      kebab: 142,
      kebabColor: "hsl(208, 70%, 50%)",
      fries: 181,
      friesColor: "hsl(308, 70%, 50%)",
      donut: 151,
      donutColor: "hsl(221, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 87,
      "hot dogColor": "hsl(182, 70%, 50%)",
      burger: 44,
      burgerColor: "hsl(251, 70%, 50%)",
      sandwich: 163,
      sandwichColor: "hsl(336, 70%, 50%)",
      kebab: 109,
      kebabColor: "hsl(234, 70%, 50%)",
      fries: 44,
      friesColor: "hsl(106, 70%, 50%)",
      donut: 110,
      donutColor: "hsl(71, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 98,
      "hot dogColor": "hsl(151, 70%, 50%)",
      burger: 96,
      burgerColor: "hsl(128, 70%, 50%)",
      sandwich: 157,
      sandwichColor: "hsl(277, 70%, 50%)",
      kebab: 157,
      kebabColor: "hsl(88, 70%, 50%)",
      fries: 45,
      friesColor: "hsl(218, 70%, 50%)",
      donut: 186,
      donutColor: "hsl(160, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 77,
      "hot dogColor": "hsl(121, 70%, 50%)",
      burger: 188,
      burgerColor: "hsl(170, 70%, 50%)",
      sandwich: 45,
      sandwichColor: "hsl(209, 70%, 50%)",
      kebab: 71,
      kebabColor: "hsl(246, 70%, 50%)",
      fries: 63,
      friesColor: "hsl(322, 70%, 50%)",
      donut: 24,
      donutColor: "hsl(224, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 129,
      "hot dogColor": "hsl(229, 70%, 50%)",
      burger: 5,
      burgerColor: "hsl(203, 70%, 50%)",
      sandwich: 144,
      sandwichColor: "hsl(74, 70%, 50%)",
      kebab: 78,
      kebabColor: "hsl(320, 70%, 50%)",
      fries: 0,
      friesColor: "hsl(205, 70%, 50%)",
      donut: 157,
      donutColor: "hsl(190, 70%, 50%)",
    },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
