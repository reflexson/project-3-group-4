import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Select from "react-select";
import {GET_SETS} from "../utils/queries";
import { useQuery } from "@apollo/client";

Chart.register(...registerables);
const Progress = () => {
  const { loading, data } = useQuery(GET_SETS);
  const sets = data?.sets || [];


  
  const [selectedOption, setSelectedOption] = useState("Week");
  // for (let i = 0; i<sets.length; i++) {
  //   let setEx = sets[i].exercise;
  //   exArray.push({setEx});
 
  // }
  // const exObArray = sets.map((ex) => (
  //   {
  //       value: ex.exercise,
  //       label: ex.exercise
  //   }
  // ));

  let exProgress = sets.filter(function(el){
    return el.exercise === selectedOption
  })

  const exArray = sets.map((ex) => (ex.exercise));

  var exArrayUnique = [...new Set(exArray)]
  const exObArray = exArrayUnique.map((e) => (
    {
        value: e,
        label: e
    }
  ));

//   console.log('exProgress:', exProgress);

  let xAxis = exProgress.map((set) => set.date);
  let yAxis = exProgress.map((set) => set.oneRepMax);
  let defaultOption =exArrayUnique[exArrayUnique.length-1]
  console.log(selectedOption)
//   console.log(xAxis);
//   console.log(yAxis);
 
  const weekChartData = {
    labels: xAxis,
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
        data: yAxis,
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
  const dropdownOptions = exObArray;

  const [chartData, setChartData] = useState(weekChartData);
  const handleChange = (selectedOptions) => {
    setSelectedOption(selectedOptions.value);
    if (selectedOptions.value === "Excercise") {
      setChartData(excerciseChartData);
    } else {
      setChartData(weekChartData);
    }
    // console.log(selectedOption);
  };
  return (
    <div className="col-12 flex-row">
      <aside className="w3-sidebar  w3-bar-block">
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
        {/* <div className="graph"style={{ width: "35%", marginLeft: "25%", padding: "2%" }}>
          <Bar data={chartData} options={options} />
        </div> */}
        <div className="graph"style={{ width: "75%", marginLeft: "10%", padding: "2%" }}>
          <Line data={chartData} options={options} />
        </div>
      </main>
      
    </div>
  );
};

export default Progress;
