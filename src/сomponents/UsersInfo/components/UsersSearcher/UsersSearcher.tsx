import {
  useState,
  useCallback,
  FC,
  useContext,
} from "react";
import Form from "react-bootstrap/Form";
import { getUsers } from "../../../../api";
import { PageContext } from "../../../../context";
import { PageCache } from "../../../../utils";
import { Title } from "../../../../ui";

import "./UsersSearcher.scss";

type UsersSearcherProps = {
  setUsers: (users: any[]) => void;
  setIsLoad: (value: boolean) => void;
  setIsError: (value: string) => void;
};

const UsersSearcher: FC<UsersSearcherProps> = ({
  setUsers,
  setIsLoad,
  setIsError,
}) => {
  const { cacheSearchUserName, cacheUsersCount } =
    useContext(PageContext);

  const [userName, setUserName] = useState(
    cacheSearchUserName
  );
  const [usersCount, setUsersCount] =
    useState(cacheUsersCount);

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> =
    useCallback(
      (e) => {
        e.preventDefault();
        const getUsersRequest = async () => {
          setIsLoad(true);

          const data = await getUsers(userName, setIsError);

          if (data) {
            const { items, total_count } = data;

            setUsers(items);
            setUsersCount(total_count);

            PageCache.set({
              cacheSearchUserName: userName,
              cacheUsersCount: total_count,
              cacheUsers: items,
            });
          }

          setIsLoad(false);
        };
        getUsersRequest();
      },
      [userName, setIsLoad, setUsers, setIsError]
    );

  return (
    <div className='usersSearcher'>
      <Title />
      <Form onSubmit={handleFormSubmit}>
        <Form.Group
          className='mb-3'
          controlId='formBasicEmail'
        >
          <Form.Control
            type='text'
            value={userName}
            placeholder='Search for Users'
            onChange={(e) => setUserName(e.target.value)}
          />
          {!!usersCount && (
            <Form.Text className='text-muted'>
              Amount searched user: {usersCount}
            </Form.Text>
          )}
        </Form.Group>
      </Form>
    </div>
  );
};
export default UsersSearcher;
