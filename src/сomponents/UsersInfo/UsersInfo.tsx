import { useState, useContext, useCallback } from "react";
import { getUserData } from "../../api";
import { PageContext } from "../../context";
import { UsersSearcher, UsersList } from "./.";
import { PageCache } from "../../utils";
import { Loader, Error } from "../../ui";
import { CurrentUserType } from "../../types";

import "./UsersInfo.scss";

type UsersInfoProps = {
  setCurrentUser: (
    currentUserType: CurrentUserType
  ) => void;
  setIsUserInfoLoad: (value: boolean) => void;
  setIsErrorUserInfo: (value: string) => void;
};

const UsersInfo = ({
  setCurrentUser,
  setIsUserInfoLoad,
  setIsErrorUserInfo,
}: UsersInfoProps) => {
  const { cacheUsers } = useContext(PageContext);

  const [users, setUsers] = useState(cacheUsers);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState("");

  const loadUserData = useCallback(
    (userDataUrl: string, reposDataUrl: string) => {
      const getUsersRequest = async (
        userDataUrl: string,
        reposDataUrl: string,
        setIsErrorUserInfo: (value: string) => void
      ) => {
        const result = await getUserData(
          userDataUrl,
          reposDataUrl,
          setIsErrorUserInfo
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
      getUsersRequest(
        userDataUrl,
        reposDataUrl,
        setIsErrorUserInfo
      );
    },
    [setCurrentUser, setIsUserInfoLoad, setIsErrorUserInfo]
  );

  return (
    <div className='users_info'>
      <UsersSearcher
        setUsers={setUsers}
        setIsLoad={setIsLoad}
        setIsError={setIsError}
      />
      {!!isError ? (
        <Error message={isError} />
      ) : isLoad ? (
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
