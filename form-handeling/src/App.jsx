import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();//Default behaviour rok dega
    console.log("submitted");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
