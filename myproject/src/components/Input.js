import React, { useState } from "react";

import "./Input.css";

const Input = (props) => {
  console.log("input!!!");
  console.log(props);

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const hookUsername = (props) => {
    setUsername(props.target.value);
  };

  const hookAge = (props) => {
    setAge(props.target.value);
  };

  const inputHandler = () => {
    console.log("inputHandler!!!");
    props.onButton(username, age);
  };

  return (
    <div>
      <div>Username</div>
      <input type="text" id="username" onChange={hookUsername} />
      <div>Age (Years)</div>
      <input type="text" id="age" onChange={hookAge} />
      <div>
        <button onClick={inputHandler}>Add User</button>
      </div>
    </div>
  );
};

export default Input;
