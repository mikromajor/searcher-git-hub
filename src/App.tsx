import { useState } from "react";
import { UsersSearcher, UsersList } from "./components";
import { useGetCacheData } from "./hooks";

import "./App.scss";

const App = () => {
  console.log("APP render");

  const { cacheUsers } = useGetCacheData();

  const [users, setUsers] = useState(cacheUsers);
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
};
export default App;
