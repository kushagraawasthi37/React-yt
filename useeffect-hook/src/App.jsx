import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const increment = () => {
    setNum((prev) => prev + 1);
  };
  const incrementNum2 = () => {
    setNum2((prev) => prev + 1);
  };

  // useEffect(() => {
  //   console.log("use effecct is running 1st use");
  // });
  useEffect(() => {
    console.log("use effecct is running 2nd use");
  }, [num]);
  return (
    <div>
      <div className="info">
        <h1>{num}</h1>
        <h1>{num2}</h1>
      </div>
      <button onClick={increment} onMouseEnter={incrementNum2}>
        Hover
      </button>
    </div>
  );
};

export default App;
