import {
  useState,
  useCallback,
  FC,
  useContext,
} from "react";
import Form from "react-bootstrap/Form";
import { getUsers } from "../../api";
import { PageContext } from "../../context";
import { PageCache } from "../../utils";
import { Title } from "../../ui";

import "./UsersSearcher.scss";

type UsersSearcherProps = {
  setUsers: (users: any[]) => void;
  setIsLoad: (value: boolean) => void;
};

const UsersSearcher: FC<UsersSearcherProps> = ({
  setUsers,
  setIsLoad,
}) => {
  const { cacheUserName, cacheUsersCount } =
    useContext(PageContext);

  const [userName, setUserName] = useState(cacheUserName);
  const [usersCount, setUsersCount] =
    useState(cacheUsersCount);

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> =
    useCallback(
      (e) => {
        e.preventDefault();
        async function getUsersRequest() {
          setIsLoad(true);

          const data = await getUsers(userName);
          const { items, total_count } = data;

          setUsers(items);
          setUsersCount(total_count);
          setIsLoad(false);

          PageCache.set({
            cacheUserName: userName,
            cacheUsersCount: total_count,
            cacheUsers: items,
          });
        }
        getUsersRequest();
      },
      [userName, setIsLoad, setUsers]
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
