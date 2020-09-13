import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tile from "./components/Tile";

function App() {
  const [fetched, updateFetched] = useState(false);
  const [data, updateData] = useState([]);

  const fetchData = async (url) => {
    try {
      const info = await fetch(url);
      const parsed = await info.json();
      console.log(parsed);
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
    <>
      {fetched ? (
        <div className="main-container">
          <Header />
          {data.map((item, index) => {
            return (
              <Tile
                key={index}
                title={item.title}
                secondary={item.secondary}
                data={item.data}
                val={item.usage}
              />
            );
          })}
        </div>
      ) : (
        <h1>waiting</h1>
      )}
    </>
  );
}

export default App;
