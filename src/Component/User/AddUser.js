import { useRef, useState } from "react";
import Button from "../../Component/UI/Button";
import ErrorModal from "../../Component/UI/ErrorModal";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  const [error, setError] = useState();

  const submitHenbler = (e) => {
    e.preventDefault();
  };
  const addUserData = () => {
    if (userNameRef.current.value.trim().length === 0 || userAgeRef.current.value.trim().length === 0) {
      setError({ title: "잘 못되 입력입니다.", content: "이름과 나이를 입력하세요" });
      return;
    }
    if (userAgeRef.current.value < 1) {
      setError({ title: "잘 못되 입력입니다.", content: "나이는 1이상 숫자를 입력하세요" });
      return;
    }
    props.onAddUser(userNameRef.current.value, userAgeRef.current.value);
    userNameRef.current.value = "";
    userAgeRef.current.value = "";
  };
  const onConfirmHandler = () => {
    setError(null);
  };

  return (
    <Card className={styles.input}>
      {error && <ErrorModal onConfirm={onConfirmHandler} title={error.title} content={error.content}></ErrorModal>}

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
