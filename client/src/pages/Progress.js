import React from "react";
import { Link } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
const Progress = () => {
  const chartData = {
    labels: ["Week1", "Week2", "Week3", "Week4", "Week5"],
    datasets: [
      {
        label: "Workout Progress",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
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
  return (
    <div className="col-12 flex-row">
      <div className="w3-sidebar w3-light-grey w3-bar-block">
        <h3 className="w3-bar-item">Menu</h3>
        <Link className="w3-bar-item alink" to="/progress">
          Progress
        </Link>
        <Link
          className="w3-bar-item w3-button"
          
          to="/workouts"
        >
          Workouts
        </Link>
        <Link
          className="w3-bar-item w3-button"
          
          to="/settings"
        >
          Settings
        </Link>
      </div>
   
      <div style={{ width: "75%", marginLeft:'25%', padding: "2%" }}>
        <Bar data={chartData} options={options} />
      </div>
      <div style={{ width: "75%", marginLeft:'25%',padding: "2%" }}>
        <Line data={chartData} options={options} />
      </div>
     
    </div>
  );
};

export default Progress;
