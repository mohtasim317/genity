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
        <p className="text line-one">{props.title}</p>
        <p className="text line-two">{props.secondary}</p>
        <p className="text line-three">{props.data}</p>
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
