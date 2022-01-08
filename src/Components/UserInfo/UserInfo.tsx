import {
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { PageContext } from "../../context";
import { PageCache } from "../../utils";
import { User } from "../../types";
import { Title } from "../../ui";
import { getUserData } from "../../api";
import {} from "react-bootstrap";

import "./UserInfo.scss";

type UserInfoProps = {
  userInfo: User | null;
};

const UserInfo = ({ userInfo }: UserInfoProps) => {
  const { cacheCurrentUser } = useContext(PageContext); //TODO

  const [currentUser, setCurrentUser] = useState(
    cacheCurrentUser
  );
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (!userInfo) return;

    const getUsersRequest = async (u: User) => {
      const result = await getUserData(u);
      if (!result) return;

      const [userData, reposData] = result;

      setCurrentUser({ userData, reposData });

      PageCache.set({
        cacheCurrentUser: { userData, reposData },
      });
    };

    setIsLoad(true);
    getUsersRequest(userInfo);
    setIsLoad(false);
  }, [userInfo, setIsLoad]);

  return (
    <>
      {currentUser && !isLoad && (
        <div className='userInfo'>
          <Title />
          <img
            src={currentUser.userData?.avatar_url}
            alt={`avatar ${currentUser.userData?.login}`}
            className='userData.user__avatar'
          />
          <div className='userData.user__common_info'>
            <p>{currentUser.userData?.login}</p>
            <p>{currentUser.userData?.url}</p>
            <p>{currentUser.userData?.avatar_url}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default UserInfo;
//TODO создать серию запросов,
//дождатся ответ, после чего рендер
