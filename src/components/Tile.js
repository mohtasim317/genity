import React from "react";

const Tile = (props) => {
  return (
    <div className="tile">
      <h1>{props.title}</h1>
      <h2>{props.secondary}</h2>
      <h2>{props.data}</h2>
    </div>
  );
};

export default Tile;
