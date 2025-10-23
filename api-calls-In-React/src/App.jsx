import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    // const response = await fetch("https://picsum.photos/seed/picsum/200/300");
    // console.log(response);

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    setData(response.data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map((ele, idx) => (
        <div key={idx} className="user-card">
          {ele.name}
        </div>
      ))}
    </div>
  );
};

export default App;
