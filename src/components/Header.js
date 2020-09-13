import React from "react";

const Header = () => {
  return (
    <div className="header">
      <p className="project-title">Project Title</p>
      <div className="button-container">
        <button className="button teams" src="#">
          Teams
        </button>
        <button className="button add-service" src="#">
          Add Service
        </button>
      </div>
    </div>
  );
};

export default Header;
