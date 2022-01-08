import { ListGroup } from "react-bootstrap";
import { User } from "../../types";

import "./UsersList.scss";

type UsersListProps = {
  users: User[];
  setUserInfo: React.Dispatch<
    React.SetStateAction<null | User>
  >;
};
const UsersList = ({
  users,
  setUserInfo,
}: UsersListProps) => {
  const openUserInfo = () => {};
  return (
    <ListGroup className={"usersList"}>
      {users.map((user) => (
        <ListGroup.Item
          variant='info'
          key={user.id}
          className={"user"}
          onClick={() => setUserInfo(user)}
        >
          <img
            src={user.avatar_url}
            alt={`${user.login} imag`}
            className={"user__img"}
          ></img>
          <span className={"user__name"}>{user.login}</span>
          <span className={"user__repo"}>TODO</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UsersList;
