import { ListGroup } from "react-bootstrap";
import { UserItem } from "./components";
import { User } from "../../types";

import "./UsersList.scss";

type UsersListProps = {
  users: User[];
  setUserInfo: (user: User) => void;
};

const UsersList = ({
  users,
  setUserInfo,
}: UsersListProps) => {
  return (
    <ListGroup className={"usersList"}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          setUserInfo={setUserInfo}
        />
      ))}
    </ListGroup>
  );
};

export default UsersList;
