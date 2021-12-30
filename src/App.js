import React, { useState } from "react";
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";

function App() {
  const [userData, setUserData] = useState([
    { userName: "kim", age: 12 },
    { userName: "lee", age: 21 },
  ]);
  const addUserDataHandler = (userDatas) => {
    setUserData((prevData) => {
      return [userDatas, ...prevData];
    });
  };
  return (
    <div>
      <AddUser onAddUserData={addUserDataHandler} />
      <UserList userData={userData} />
    </div>
  );
}

export default App;
