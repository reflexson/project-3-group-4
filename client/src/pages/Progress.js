import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Select from "react-select";
// import {GET_SETS} from "../utils/queries";
import { useQuery } from "@apollo/client";

Chart.register(...registerables);
const Progress = () => {
  // const { loading, data } = useQuery(GET_SETS);
  // const sets = data?.sets || [];

  // console.log(data)



  const weekChartData = {
    labels: ["Week1", "Week2", "Week3", "Week4", "Week5"],
    datasets: [
      {
        label: "Workout Progress",
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 29, 152, 0.6)",
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [10, 15, 20, 25, 30],
      },
    ],
  };
  const excerciseChartData = {
    labels: [
      "Excercise 1",
      "Excercise 2",
      "Excercise 3",
      "Excercise 4",
      "Excercise 5",
    ],
    datasets: [
      {
        label: "Workout Progress",
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 29, 152, 0.6)",
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [10, 15, 20, 25, 30],
      },
    ],
  };
  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        title: {
          display: true,
          text: "Workout Progress",
        },
      },
    },
  };
  const dropdownOptions = [
    {
      value: "Week",
      label: "Week",
    },
    {
      value: "Excercise",
      label: "Excercise",
    },
  ];
  const [selectedOption, setSelectedOption] = useState("Week");
  const [chartData, setChartData] = useState(weekChartData);
  const handleChange = (selectedOptions) => {
    setSelectedOption(selectedOptions.value);
    if (selectedOptions.value == "Excercise") {
      setChartData(excerciseChartData);
    } else {
      setChartData(weekChartData);
    }
    console.log(selectedOption);
  };
  return (
    <div className="col-12 flex-row">
      <aside className="w3-sidebar w3-light-grey w3-bar-block">
        <h3 className="w3-bar-item">Menu</h3>
        <Link className="w3-bar-item alink" to="/progress">
          Progress
        </Link>
        <Link className="w3-bar-item w3-button" to="/workouts">
          Workouts
        </Link>
        <Link className="w3-bar-item w3-button" to="/settings">
          Settings
        </Link>
      </aside>

      <main className="dashcont">
        <div  style={{ width: "35%", marginLeft: "25%", padding: "2%" }}>
          <Select
            options={dropdownOptions}
            default={selectedOption}
            onChange={handleChange}
          />
        </div>
        <div className="graph"style={{ width: "35%", marginLeft: "25%", padding: "2%" }}>
          <Bar data={chartData} options={options} />
        </div>
        <div className="graph"style={{ width: "35%", marginLeft: "25%", padding: "2%" }}>
          <Line data={chartData} options={options} />
        </div>
      </main>
      
    </div>
  );
};

export default Progress;
