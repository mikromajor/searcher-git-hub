import { memo } from "react";
import { UserData as UserDataType } from "../../../../types";
import "./UserData.scss";
type UserDataProps = {
  userData?: UserDataType;
};

const UserData = ({ userData }: UserDataProps) => {
  const joinDate = userData?.created_at.slice(0, 10);
  const biography = !!userData?.bio
    ? userData.bio
    : "No biography";
  return (
    <>
      {userData && (
        <div className='userData'>
          <div className='userData__inline_block'>
            <img
              src={userData?.avatar_url}
              alt={`avatar ${userData?.login}`}
              className='userData__avatar'
            />
            <ul className='userData__common_info'>
              <li>{userData?.name}</li>
              <li>{userData?.login}</li>
              <li>{userData?.location}</li>
              <li>{userData?.url}</li>
              <li>Join date {joinDate}</li>
              <li>{userData?.followers} Followers</li>
              <li>Following {userData?.following}</li>
            </ul>
          </div>
          <div className='userData__bottom'>
            <p>{biography}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(UserData);
