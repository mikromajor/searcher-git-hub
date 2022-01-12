import { useState, useContext, useCallback } from "react";
import { getUserData } from "../../api";
import { PageContext } from "../../context";
import { UsersSearcher, UsersList } from "./.";
import { PageCache } from "../../utils";
import { Loader } from "../../ui";
import { CurrentUserType } from "../../types";

import "./UsersInfo.scss";

type UsersInfoProps = {
  setCurrentUser: (
    currentUserType: CurrentUserType
  ) => void;
  setIsUserInfoLoad: (value: boolean) => void;
};

const UsersInfo = ({
  setCurrentUser,
  setIsUserInfoLoad,
}: UsersInfoProps) => {
  const { cacheUsers } = useContext(PageContext);

  const [users, setUsers] = useState(cacheUsers);
  const [isLoad, setIsLoad] = useState(false);

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
    [setCurrentUser, setIsUserInfoLoad]
  );

  return (
    <div className='users_info'>
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
  );
};
export default UsersInfo;
