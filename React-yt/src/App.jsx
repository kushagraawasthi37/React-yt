import React from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="home">
        <Navbar />

        <div className="cards">
          <Card
            username="Alice"
            profession="stock market expert "
            age={18}
            image={"./src/assets/Images/image1.webp"}
          />
          <Card
            username="Victor"
            profession="rugby player"
            age={19}
            image={"./src/assets/Images/image2.webp"}
          />
          <Card
            username="Carlos"
            profession="tennis player"
            age={20}
            image={"./src/assets/Images/image3.webp"}
          />
          <Card
            username="Sinner"
            profession="tennis player"
            age={21}
            image={"./src/assets/Images/image4.webp"}
          />
          <Card
            username="Sarthack"
            profession="teacher"
            age={19}
            image={"./src/assets/Images/image5.webp"}
          />
        </div>
      </div>
    </>
  );
};

export default App;
