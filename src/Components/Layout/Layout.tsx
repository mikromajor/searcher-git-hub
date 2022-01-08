import { useState, useContext } from "react";
import { UsersSearcher, UsersList } from "../.";
import { PageContext } from "../../context";
import { User } from "../../types";
import { UserInfo } from "../UserInfo";

import "./Layout.scss";

const Layout = () => {
  console.log("Layout render");

  const { cacheUsers } = useContext(PageContext);

  const [users, setUsers] = useState(cacheUsers);
  const [isLoad, setIsLoad] = useState(false);
  const [userInfo, setUserInfo] = useState<null | User>(
    null
  );
  console.log(userInfo);

  return (
    <div className={"layout"}>
      <div className='users__searcher_block'>
        <UsersSearcher
          setUsers={setUsers}
          setIsLoad={setIsLoad}
        />
        {isLoad ? (
          <p>Loading...</p>
        ) : (
          <UsersList
            users={users}
            setUserInfo={setUserInfo}
          />
        )}
      </div>
      <div className='user__info_block'>
        <UserInfo userInfo={userInfo} />
      </div>
    </div>
  );
};
export default Layout;
