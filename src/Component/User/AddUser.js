import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      alert("입력값을 넣어주세요");
      return;
    }
    if (+userAge < 1) {
      alert("나이값이 0보다 작습니다");
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input value={userName} onChange={userNameHandler} id="username" type="text" />
        <label htmlFor="userage">Age (Years)</label>
        <input value={userAge} onChange={userAgeHandler} id="userage" type="number" />
        <Button type="submit">추가하기</Button>
      </form>
    </Card>
  );
};
export default AddUser;
