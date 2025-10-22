import React, { useState } from "react";

const App = () => {
  // let a = 10;

  const [a, setA] = useState(19);
  const [username, setUsername] = useState("Kushagra");
  const [user, setUser] = useState({ name: "Deepak", age: 20 });
  const [nums, setNums] = useState([10, 20, 30]);

  const incrementA = () => {
    setA(a + 1); //Works asynchronously
    setA(a + 1); //Works asynchronously
    setA(a + 1); //Works asynchronously
    setA(a + 1); //Works asynchronously
    setA(a + 1); //Works asynchronously  same +1 hi hoga +5 nahi

    // setA((prev) => prev + 1);
    // setA((prev) => prev + 1);
    // setA((prev) => prev + 1);
    // setA((prev) => prev + 1);
    // setA((prev) => prev + 1);
    //+5 hoga
    console.log(a);
  };
  const DecrementA = () => {
    setA(a - 1);
    console.log(a);
  };
  const changeUserName = () => {
    if (username == "Abhay") setUsername("Kushagra");
    else setUsername("Abhay");
  };
  const updateUser = () => {
    const newUser = { ...user };
    console.log(user);
    newUser.name = username;
    newUser.age = a;
    setUser(newUser);
  };

  const updateNums = () => {
    const newNums = [...nums];
    console.log(newNums);
    setNums(
      newNums.map((ele) => {
        return ele * 2;
      })
    );

    //Other way of doing the same thing
    // setNums((prev) => prev.map((ele) => ele * 2));
  };

  return (
    <div>
      <div className="c1">
        username : {username}
        <br />
        count : {a}
      </div>
      <button onClick={incrementA}>Increment</button>
      <button onClick={DecrementA}>Decrease</button>
      <button onClick={changeUserName}>Toggle username</button>

      <div className="c1">
        user: {user.name} <br />
        age: {user.age}
      </div>
      <button onClick={updateUser}>Update user</button>

      <div className="c1">{nums[0]}</div>
      <button onClick={updateNums}>Update nums</button>
    </div>
  );
};

export default App;
