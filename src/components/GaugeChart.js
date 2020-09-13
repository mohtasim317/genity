import React from "react";
import c3 from "c3";

const GaugeChart = (props) => {
  (async function renderChart() {
    c3.generate(
      await {
        bindto: "#chart" + props.val,
        data: {
          columns: [["data", props.val]],
          type: "gauge",
        },
        color: {
          pattern: ["#FF0000", "#F97600", "#F6C600", "#60B044"], // the three color levels for the percentage values.
          threshold: {
            values: [25, 50, 75, 100],
          },
        },
        size: {
          height: 80,
        },
      }
    );
  })();

  return (
    <div>
      <div className="chart" id={"chart" + props.val}>
        {"#chart" + props.val}
      </div>
    </div>
  );
};
export default GaugeChart;
