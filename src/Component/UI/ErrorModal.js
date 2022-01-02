import ReactDOM from "react-dom";

import Button from "../../Component/UI/Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2 className={styles.h2}>{props.title}</h2>
      </header>
      <div className={styles.content}>{props.content}</div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm} content={"확인"}></Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} content={props.content} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
