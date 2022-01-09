import { ListGroup } from "react-bootstrap";
import { UserItem } from "./components";
import { User } from "../../types";

import "./UsersList.scss";

type UsersListProps = {
  users: User[];
  loadUserData: (
    userDataUrl: string,
    reposDataUrl: string
  ) => void;
};

const UsersList = ({
  users,
  loadUserData,
}: UsersListProps) => {
  return (
    <ListGroup className={"usersList"}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          loadUserData={loadUserData}
        />
      ))}
    </ListGroup>
  );
};

export default UsersList;
