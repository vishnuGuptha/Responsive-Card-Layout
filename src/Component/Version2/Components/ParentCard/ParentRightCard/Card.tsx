import React from "react";
const { faker } = require("@faker-js/faker");
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Temperature & Humidity ",
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const ParentRightCard = () => {
  return (
    <div className="shadow-2xl border-0 w-2/3 h-full rounded-3xl bg-[#ffffff] py-2">
      <div className="w-full flex flex-row gap-8 justify-center items-center h-2/3">
        {" "}
        <Line options={options} data={data} width={"500px"} />
      </div>
      <div className="w-full flex justify-center items-center h-1/3 divide-2 gap-5">
        <div className="w-1/7">
          <div className="flex flex-col">
            <div>MON</div>
            <div>icon</div>
            <div>13</div>
          </div>
        </div>
        <div className="w-1/7">
          <div className="flex flex-col">
            <div>MON</div>
            <div>icon</div>
            <div>13</div>
          </div>
        </div>
        <div className="w-1/7">
          <div className="flex flex-col">
            <div>MON</div>
            <div>icon</div>
            <div>13</div>
          </div>
        </div>
        <div className="w-1/7">
          <div className="flex flex-col">
            <div>MON</div>
            <div>icon</div>
            <div>13</div>
          </div>
        </div>
        <div className="w-1/7">
          <div className="flex flex-col">
            <div>MON</div>
            <div>icon</div>
            <div>13</div>
          </div>
        </div>
        <div className="w-1/7">
          <div className="flex flex-col">
            <div>MON</div>
            <div>icon</div>
            <div>13</div>
          </div>
        </div>
        <div className="w-1/7">
          <div className="flex flex-col">
            <div>MON</div>
            <div>icon</div>
            <div>13</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentRightCard;
