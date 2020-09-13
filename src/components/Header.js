import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h2>Project Title</h2>
      <div className="button-container">
        <button className="button teams">Teams</button>
        <button className="button add-service">Add Service</button>
      </div>
    </div>
  );
};

export default Header;
