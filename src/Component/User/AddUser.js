import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="userage">Age (Years)</label>
        <input id="userage" type="number" />
        <button type="submit">추가하기</button>
      </form>
    </Card>
  );
};
export default AddUser;
