import { memo } from "react";
import { UserData as UserDataType } from "../../../../types";
import "./UserData.scss";
type UserDataProps = {
  userData?: UserDataType;
};

const UserData = ({ userData }: UserDataProps) => (
  <>
    {userData && (
      <div className='userData'>
        <div className='userData__inline_block'>
          <img
            src={userData?.avatar_url}
            alt={`avatar ${userData?.login}`}
            className='userData__avatar'
          />
          <div className='userData__common_info'>
            <p>{userData?.name}</p>
            <p>{userData?.login}</p>
            <p>{userData?.location}</p>
            <p>{userData?.url}</p>
            <p>Join date {userData?.created_at}</p>
            <p>{userData?.followers} Followers</p>
            <p>Following {userData?.following}</p>
          </div>
        </div>
        <div className='userData__bottom'>
          <p>{userData?.bio}</p>
        </div>
      </div>
    )}
  </>
);

export default memo(UserData);
