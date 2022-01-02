import Button from "../../Component/UI/Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div onClick={props.onConfirm} className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2 className={styles.h2}>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.content}</div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm} content={"확인"}></Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
