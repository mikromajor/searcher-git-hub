import { useState, useContext, useCallback } from "react";
import { UsersSearcher, UsersList } from "../.";
import { getUserData } from "../../api";
import { PageContext } from "../../context";
import { UserInfo } from "../UserInfo";
import { PageCache } from "../../utils";
import { Loader } from "../../ui";

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
        setIsUserInfoLoad(false);
      };

      setIsUserInfoLoad(true);
      getUsersRequest(userDataUrl, reposDataUrl);
    },
    [setIsUserInfoLoad]
  );

  return (
    <div className={"layout"}>
      <div className='users_searcher__block'>
        <UsersSearcher
          setUsers={setUsers}
          setIsLoad={setIsLoad}
        />
        {isLoad ? (
          <Loader />
        ) : (
          <UsersList
            users={users}
            loadUserData={loadUserData}
          />
        )}
      </div>

      {isUserInfoLoad ? (
        <div className='users_searcher__block'>
          <Loader />
        </div>
      ) : (
        <UserInfo currentUser={currentUser} />
      )}
    </div>
  );
};
export default Layout;
