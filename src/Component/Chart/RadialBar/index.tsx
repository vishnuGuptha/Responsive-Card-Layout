import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const RadialBar = () => {
  const data = {
    labels: ["Temperature"],
    datasets: [
      {
        label: "Data Property",
        data: [200, 50],
        backgroundColor: ["#404040", "#404020"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: 70 + "%",
  };

  return <Doughnut data={data} options={options} />;
};

export default RadialBar;
