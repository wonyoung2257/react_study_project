import { useRef } from "react";
import Button from "../../Component/UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();

  const submitHenbler = (e) => {
    e.preventDefault();
  };
  const addUserData = () => {
    if (userNameRef.current.value.trim().length === 0 || userAgeRef.current.value.trim().length === 0) {
      alert("입력해주세요");
      return;
    }
    if (userAgeRef.current.value < 1) {
      alert("나이를 제대로 입력해주세요 (1이상 값)");
      return;
    }
    props.onAddUser(userNameRef.current.value, userAgeRef.current.value);
    userNameRef.current.value = "";
    userAgeRef.current.value = "";
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={submitHenbler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={userNameRef} />
        <label htmlFor="userage">Age (Years)</label>
        <input id="userage" type="number" ref={userAgeRef} />
        <Button type="submit" content="추가하기" onClick={addUserData}></Button>
      </form>
    </Card>
  );
};

export default AddUser;
