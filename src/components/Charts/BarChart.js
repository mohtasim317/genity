import React from "react";
import c3 from "c3";

const BarChart = (props) => {
  (async function () {
    c3.generate(
      await {
        bindto: "#chart" + props.val,
        data: {
          columns: [
            ["data1", props.val],
            ["data2", props.val + 10],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.5,
          },
        },
        size: {
          height: 200,
        },
        axis: {
          y: {
            show: false,
          },
          x: {
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
      <div className="chart" id={"chart" + props.val}></div>
    </div>
  );
};
export default BarChart;
