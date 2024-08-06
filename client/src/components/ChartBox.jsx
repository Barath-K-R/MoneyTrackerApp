import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Legend from "./Legend";
const ChartBox = ({ timeLineExpenses }) => {
  const aggregateData = (data) => {
    const result = data.reduce((acc, current) => {
      const { category, amount } = current;
      const amountNumber = parseFloat(amount);

      if (acc[category]) {
        acc[category] += amountNumber;
      } else {
        acc[category] = amountNumber;
      }
      console.log(acc);
      return acc;
    }, {});

    return Object.keys(result).map((key) => ({
      name: key,
      value: result[key],
    }));
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const data = aggregateData(timeLineExpenses);

  const mapColorsToCategories = (data) => {
    const colorMapping = {};
    data.forEach((item) => {
      if (!colorMapping[item.name]) {
        colorMapping[item.name] = getRandomColor();
      }
    });
    return colorMapping;
  };

  const colorMapping = mapColorsToCategories(data);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="chartbox-container">
      <div className="piechart-container">
        <div className="piechart-left">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart width={500} height={500}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colorMapping[entry.name]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="piechart-right"><Legend data={data} colorMapping={colorMapping}/></div>
      </div>
    </div>
  );
};

export default ChartBox;
