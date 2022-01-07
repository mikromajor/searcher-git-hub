import {
  useState,
  useCallback,
  ReactEventHandler,
} from "react";
import Form from "react-bootstrap/Form";
import { getUsers } from "../../API/idex";
import "./UsersSearcher.scss";

type UsersSearcherProps = {
  setUsers: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

const UsersSearcher = ({
  setUsers,
  setIsLoad,
}: UsersSearcherProps) => {
  const [userName, setUserName] = useState("");
  const [usersCount, setUsersCount] = useState(0);

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
