import React, { useState } from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./ScoreChart.css"

function ScoreChart(props) {
  const Data = [
    {
      id: 1,
      answers: "Correct Answers",
      score: props.score,
    },
    {
      id: 2,
      answers: "Incorrect Answers",
      score: props.questions.length - props.score,
    },
  ];

  const [value, setValue] = useState({
    labels: Data.map((data) => data.answers),
    datasets: [
      {
        label: "Score Board",
        data: Data.map((data) => data.score),
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="score_chart">
      <div style={{ width: 350 }}>
        <Pie data={value} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
    questions: state.questions,
  };
};

export default connect(mapStateToProps)(ScoreChart);
