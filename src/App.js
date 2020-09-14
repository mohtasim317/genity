import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tile from "./components/Tile";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [fetched, updateFetched] = useState(false);
  const [data, updateData] = useState([]);

  const fetchData = async (url) => {
    try {
      const info = await fetch(url);
      const parsed = await info.json();
      updateFetched(true);
      updateData(parsed);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    fetchData("https://5f5aebbb044570001674c45d.mockapi.io/genity/data");
  }, []);

  return (
    <div>
      {fetched ? (
        <div className="main-container">
          <Header />
          <div className="tile-container">
            {data.map((item, index) => {
              return (
                <Tile
                  key={index}
                  title={item.title}
                  secondary={item.secondary}
                  data={item.data}
                  val={item.usage}
                  type={item.type}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="waiting">
          <h1 className="waiting-text">Fetching from API</h1>
          <Spinner animation="grow" variant="warning" />
        </div>
      )}
    </div>
  );
}

export default App;
