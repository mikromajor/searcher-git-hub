import { ListGroup } from "react-bootstrap";
import { USER } from "../../constants";
type UsersListProto = {
  users: USER[];
};
const UsersList = ({ users }: UsersListProto) => {
  return (
    <ListGroup className={"UsersList"}>
      {users.map((user) => (
        <ListGroup.Item
          variant='info'
          key={user.id}
          className={"user"}
        >
          <img
            src={user.img}
            alt={`${user.name} imag`}
            className={"user__img"}
          ></img>
          <span className={"user__name"}>{user.name}</span>
          <span className={"user__repo"}>
            {user.repoLength}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UsersList;
