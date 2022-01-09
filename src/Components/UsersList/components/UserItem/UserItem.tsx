import { useCallback, FC, memo } from "react";
import { ListGroup } from "react-bootstrap";
import { User } from "../../../../types";

type UserItemProps = {
  user: User;
  loadUserData: (
    userDataUrl: string,
    reposDataUrl: string
  ) => void;
};

const UserItem: FC<UserItemProps> = ({
  user,
  loadUserData,
}) => {
  const handleClick = useCallback(
    () => loadUserData(user.url, user.repos_url),
    [user, loadUserData]
  );

  return (
    <ListGroup.Item
      variant='info'
      className={"user"}
      onClick={handleClick}
    >
      <img
        src={user.avatar_url}
        alt={`${user.login} imag`}
        className={"user__img"}
      ></img>
      <span className={"user__name"}>{user.login}</span>
      <span className={"user__repo"}>TODO</span>
    </ListGroup.Item>
  );
};

export default memo(UserItem);
