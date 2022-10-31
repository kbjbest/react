import React from "react";
import "./App.css";

import Input from "./components/Input";
// import Card from "./components/Card";

function App(props) {
  console.log("App!!!");
  console.log(props);

  const buttonHandler = (username, age) => {
    console.log("buttonHandler!!!");
    console.log("username : " + username);
    console.log("age : " + age);
  };

  return (
    <div>
      <Input onButton={buttonHandler} />
      {/* <Card /> */}
    </div>
  );
}

export default App;
