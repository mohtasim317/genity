import React from "react";
import c3 from "c3";

const GaugeChart = (props) => {
  (async function () {
    c3.generate(
      await {
        bindto: "#chart" + props.val,
        data: {
          columns: [["data", props.val]],
          type: "gauge",
        },
        color: {
          pattern: ["#EA452F", "#F07530", "#F6C600", "#60AF43"], // the three color levels for the percentage values.
          threshold: {
            values: [25, 50, 75, 100],
          },
        },
        size: {
          height: 80,
        },
        gauge: {
          label: {
            show: false,
          },
        },
        legend: {
          show: false,
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
