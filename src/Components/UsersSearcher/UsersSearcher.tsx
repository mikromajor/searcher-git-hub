import {
  useState,
  useCallback,
  useEffect,
  FC,
} from "react";
import Form from "react-bootstrap/Form";
import { getUsers } from "../../api";
import { PageCache } from "../../utils";
import { useGetCacheData } from "../../hooks";

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
    useGetCacheData();

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
        }
        getUsersRequest();
      },
      [userName, setIsLoad, setUsers]
    );

  return (
    <div className='UsersSearcher'>
      <h2>Git Hub searcher</h2>
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
