import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const nameHandler = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted by ", name);
    setName("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={nameHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
