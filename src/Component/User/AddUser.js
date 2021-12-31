import { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const submitHenbler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.input} onSubmit={submitHenbler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="userage">Age (Years)</label>
      <input id="userage" type="number" />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default AddUser;
