// Open Workspace : 20%
// Cabins: 50%;
// Meeting rooms: 5%;
// Public Spaces: 15%;
// Support Spaces: 10%

// const input = area;
// const workSpace = [
//     {type: "openWorkspace", value: Number((20*input)/100)},
//     {type:"cabins", value: Number((50*input)/100)},
//     {type:"meetingRooms", value: Number((5*input)/100)},
//     {type:"publicSpace",value: Number((15*input)/100)},
//     {type:"supportSpace",value: Number((10*input)/100)}
// ]

// backgroundColor: [
//     '#3E5AFF',
//     '#FFB55F',
//     '#FF796C',
//     '#4C5EC6',
//     '#9C6DFF',
// ],

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ area }) => {
  const input = area;
  const workSpace = [
    { type: "openWorkspace", value: Number((20 * input) / 100) },
    { type: "cabins", value: Number((50 * input) / 100) },
    { type: "meetingRooms", value: Number((5 * input) / 100) },
    { type: "publicSpace", value: Number((15 * input) / 100) },
    { type: "supportSpace", value: Number((10 * input) / 100) },
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "WORKSPACE",
      },
    },
    scaleShowLabels: false,
  };
  const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels: workSpace.map((item) => item.type),
    datasets: [
      {
        label: "Visualize",
        // data: [12, 19, 3, 5, 2, 3],
        data: workSpace.map((item) => item.value),
        backgroundColor: [
          "#3E5AFF",
          "#FFB55F",
          "#FF796C",
          "#4C5EC6",
          "#9C6DFF",
        ],
        borderColor: ["#FFFFFF", "#FFB55F", "#FF796C", "#4C5EC6", "#9C6DFF"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Chart;
