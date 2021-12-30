import classes from "./UserList.module.css";
import Card from "../UI/Card";
const UserList = (props) => {
  const userList = props.userData.map((user) => {
    return <li>{`${user.userName} (${user.age} years Old)`}</li>;
  });
  // console.log(props.userData);
  return (
    <Card className={classes.users}>
      <ul>{userList}</ul>
    </Card>
  );
};
export default UserList;
