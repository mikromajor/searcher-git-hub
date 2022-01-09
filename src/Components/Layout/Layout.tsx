import { useState, useContext, useCallback } from "react";
import { UsersSearcher, UsersList } from "../.";
import { getUserData } from "../../api";
import { PageContext } from "../../context";
import { User } from "../../types";
import { UserInfo } from "../UserInfo";
import { PageCache } from "../../utils";

import "./Layout.scss";

const Layout = () => {
  const { cacheUsers, cacheCurrentUser } =
    useContext(PageContext);

  const [users, setUsers] = useState(cacheUsers);
  const [currentUser, setCurrentUser] = useState(
    cacheCurrentUser
  );
  const [isLoad, setIsLoad] = useState(false);
  const [isUserInfoLoad, setIsUserInfoLoad] =
    useState(false);

  const loadUserData = useCallback(
    (userDataUrl: string, reposDataUrl: string) => {
      const getUsersRequest = async (
        userDataUrl: string,
        reposDataUrl: string
      ) => {
        const result = await getUserData(
          userDataUrl,
          reposDataUrl
        );
        if (!result) return;

        const [userData, reposData] = result;

        setCurrentUser({ userData, reposData });

        PageCache.set({
          cacheCurrentUser: { userData, reposData },
        });
      };

      setIsUserInfoLoad(true);
      getUsersRequest(userDataUrl, reposDataUrl);
      setIsUserInfoLoad(false);
    },
    [setIsUserInfoLoad]
  );

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
            loadUserData={loadUserData}
          />
        )}
      </div>
      <div className='user__info_block'>
        {isUserInfoLoad ? (
          <p>Loading...</p>
        ) : (
          <UserInfo currentUser={currentUser} />
        )}
      </div>
    </div>
  );
};
export default Layout;
