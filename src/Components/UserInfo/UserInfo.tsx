import { memo } from "react";
import { CurrentUserType } from "../../types";
import { Title } from "../../ui";
import { UserData, ReposData } from "./components";

import "./UserInfo.scss";

type UserInfoProps = {
  currentUser: CurrentUserType;
};

const UserInfo = ({ currentUser }: UserInfoProps) => {
  return (
    <>
      {currentUser && (
        <div className='userInfo'>
          <Title />
          <UserData userData={currentUser.userData} />
          <ReposData reposData={currentUser.reposData} />
        </div>
      )}
    </>
  );
};

export default memo(UserInfo);
