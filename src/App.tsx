import { useState } from "react";
import "./App.scss";
import { UsersSearcher, UsersList } from "./Components";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  return (
    <div className='App'>
      <UsersSearcher
        setUsers={setUsers}
        setIsLoad={setIsLoad}
      />
      {isLoad ? (
        <p>Loading...</p>
      ) : (
        <UsersList users={users} />
      )}
    </div>
  );
}
export default App;
