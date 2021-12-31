import { useState } from "react";
import Button from "../../Component/UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const submitHenbler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={submitHenbler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="userage">Age (Years)</label>
        <input id="userage" type="number" />
        <Button type="submit" content="추가하기"></Button>
      </form>
    </Card>
  );
};

export default AddUser;
