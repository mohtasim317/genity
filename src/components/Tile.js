import React from "react";
import GaugeChart from "./GaugeChart";

const Tile = (props) => {
  return (
    <div className="tile">
      <div className="tile-information">
        <h1>{props.title}</h1>
        <h2>{props.secondary}</h2>
        <h2>{props.data}</h2>
      </div>
      <GaugeChart val={props.val} />
    </div>
  );
};

export default Tile;
