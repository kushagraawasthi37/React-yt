import React from "react";

const App = () => {
  //Local storage->ye humesha rahega chahe browser acitve ho ya na ho
  //Session storage -> jab tak session active hai tab tak hi ye rahega jaise hi session hatega ye gayab mtlb jab tak browser actice tab tak ye rahega

  //Clear complete local and session storage
  // localStorage.clear();
  // sessionStorage.clear();

  //Store item in local and session storage
  // localStorage.setItem("user", "Kushagra");
  // sessionStorage.setItem("user", "Kushagra");

  //Remove item from local and session storage
  // sessionStorage.removeItem("user");
  // localStorage.removeItem("user");

  //get item from local and session storage
  // console.log("sessionStorage-->", sessionStorage.getItem("user"));
  // console.log("LocalStorage-->", localStorage.getItem("user"));

  //Data store and retrieve from local and session storage is always in string form so covert to string before store and convert to original form after retrieve
  const user = {
    name: "Kushagra",
    age: 20,
  };

  //convert data to string
  localStorage.setItem("user", JSON.stringify(user));
  // localStorage.clear();

  //revert the data from string to json
  let retrievedUser = localStorage.getItem("user");
  console.log(typeof retrievedUser); //string

  retrievedUser = JSON.parse(retrievedUser);
  console.log(typeof retrievedUser); //Object

  return <div>App</div>;
};

export default App;
