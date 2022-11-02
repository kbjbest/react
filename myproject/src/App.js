import React, { useState } from "react";
import "./App.css";

import Input from "./components/Input";
import Card from "./components/Card";

function App(props) {
  console.log("App!!!");
  console.log(props);

  const data = [];

  const [item, setItem] = useState("");

  const buttonHandler = (username, age) => {
    console.log("buttonHandler!!!");
    console.log("username : " + username);
    console.log("age : " + age);

    let itemString = username + " (" + age + " years old)";
    console.log("itemString : " + itemString);


    setItem((prevItem) => {
      console.log(...prevItem);
      let itemString = username + " (" + age + " years old)";
      console.log("itemString : " + itemString);
      return [itemString, ...prevItem];
    });
  };

  return (
    <div>
      <Input onButton={buttonHandler} />
      <Card items={item} />
    </div>
  );
}

export default App;
