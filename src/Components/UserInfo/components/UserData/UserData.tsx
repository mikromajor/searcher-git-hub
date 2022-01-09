import { memo } from "react";
import { UserData as UserDataType } from "../../../../types";

type UserDataProps = {
  userData?: UserDataType;
};

const UserData = ({ userData }: UserDataProps) => (
  <div>
    {userData && (
      <>
        <img
          src={userData?.avatar_url}
          alt={`avatar ${userData?.login}`}
          className='userData.user__avatar'
        />
        <div className='userData.user__common_info'>
          <p>{userData?.login}</p>
          <p>{userData?.url}</p>
          <p>{userData?.avatar_url}</p>
        </div>
      </>
    )}
  </div>
);

export default memo(UserData);
