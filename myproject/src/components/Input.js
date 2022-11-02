import React, { useState } from "react";

import "./Input.css";

const Input = (props) => {
  console.log("Input!!!");
  console.log(props);

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (event) => {
    console.log("usernameHandler!!!");
    setUsername(event.target.value);
    console.log(props);
    console.log(event);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    console.log("submitHandler!!!");
    console.log(event);
    event.preventDefault();
    console.log("username : " + username);
    console.log("age : " + age);

    if (username === "" || age === "") {
      alert("Please enter a valid and age (non-empty values).");
    } else if (age < 0) {
      alert("Please enter a valid age (>0).");
    } else {
      console.log("props.onButton prev");
      props.onButton(username, age);
      console.log("props.onButton after");
    }
    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>Username</div>
        <input
          type="text"
          id="username"
          value={username}
          onChange={usernameHandler}
        />
        <div>Age (Years)</div>
        <input type="text" id="age" value={age} onChange={ageHandler} />
        <div>
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
};

export default Input;
