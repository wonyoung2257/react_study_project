import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";
import { userState, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  const addUserDataHanbler = (name, age) => {
    setUserData((prevData) => {
      return [...prevData, { name: name, age: age, id: Math.random().toString() }];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserDataHanbler} />
      <UserList users={userData} />
    </>
  );
}

export default App;
