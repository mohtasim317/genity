import React from "react";
import GaugeChart from "./Charts/GaugeChart";
import BarChart from "./Charts/BarChart";

const Tile = (props) => {
  return (
    <div className="tile">
      <img
        className="tile-icon"
        src={`${props.type}.png`}
        alt={`${props.type} icon`}
      />
      <div className="tile-information">
        <h1>{props.title}</h1>
        <h2>{props.secondary}</h2>
        <h2>{props.data}</h2>
      </div>
      {props.type.toLowerCase().includes("network") ? (
        <BarChart val={props.val} />
      ) : (
        <GaugeChart val={props.val} />
      )}
    </div>
  );
};

export default Tile;
