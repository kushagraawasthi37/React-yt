import React from "react";

const App = () => {
  const btnClicked = () => {
    console.log("Button Clicked");
  };
  const mouseEnter = () => {
    console.log("Mouse entered");
  };

  const trackInput = function (e) {
    console.log(e.target);
    console.log(e.target.value);
  };
  return (
    <div
      className="parent"
      onWheel={function (e) {
        if (e.deltaY > 0) {
          console.log("Sidha scrolling");
        } else console.log("ulta scrolling");
      }}
    >
      <button onClick={btnClicked} onMouseEnter={mouseEnter}>
        CLick here
      </button>
      <button onClick={btnClicked} onMouseEnter={mouseEnter}>
        Explore More
      </button>
      <button
        onClick={() => {
          console.log("Now you are ready");
        }}
      >
        Ready
      </button>

      <input type="text" placeholder="Enter your name" onChange={trackInput} />

      <div
        className="box"
        onMouseMove={function (e) {
          console.log(e);
          console.log(e.clientX);
          console.log(e.clientY);
        }}
        onWheel={function (e) {
          console.log(e);
        }}
      ></div>

      <div className="page1">page1</div>
      <div className="page2">Page2</div>
    </div>
  );
};

export default App;
