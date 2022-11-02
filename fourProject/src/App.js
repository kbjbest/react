import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  console.log("App!!!");
  const [userList, setUserList] = useState([]);
  console.log(userList);

  const addUserHandler = (uName, uAge, uKey) => {
    console.log("App addUserHandler!!!");
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, key: uKey }];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </React.Fragment>
  );
}

export default App;
