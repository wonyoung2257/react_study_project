import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "입력값 없음",
        message: "이름과 나이를 입력해주세요",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "나이를 잘 못 입력했음",
        message: "나이는 0 이상의 값을 넣어줘요",
      });
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input value={userName} onChange={userNameHandler} id="username" type="text" />
          <label htmlFor="userage">Age (Years)</label>
          <input value={userAge} onChange={userAgeHandler} id="userage" type="number" />
          <Button type="submit">추가하기</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
