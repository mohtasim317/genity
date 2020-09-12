import React, { useState, useEffect } from "react";
import Header from "./components/Header";

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
    <div className="App">
      {fetched ? (
        <div>
          <Header />
          {data.map((item, index) => {
            return (
              <div>
                <h1>{item.title}</h1>
                <h2>{item.secondary}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>waiting</h1>
      )}
    </div>
  );
}

export default App;
