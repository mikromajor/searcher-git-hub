import { memo } from "react";
import { UserData as UserDataType } from "../../../../types";
import "./UserData.scss";
type UserDataProps = {
  userData?: UserDataType;
};
type Print = {
  [key: string]: string;
};

const UserData = ({ userData }: UserDataProps) => {
  //  const print:Print= {};
  //   for(let key in userData){
  //   print[key]=!!userData[key]?print[key].toString():('No '+key)
  // }

  const name = !!userData?.name ? userData.name : "no name";
  const login = !!userData?.login
    ? userData.login
    : "no login";
  const location = !!userData?.location
    ? userData.location
    : "no location";
  const url = !!userData?.url ? userData.url : "no url";

  const joinDate = userData?.created_at.slice(0, 10);
  const biography = !!userData?.bio
    ? userData.bio
    : "No biography";
  const followers = userData?.followers
    ? userData.followers
    : "0";
  const following = userData?.following
    ? userData.following
    : "0";

  return (
    <div className='userData'>
      <div className='userData__inline_block'>
        <img
          src={userData?.avatar_url}
          alt={`avatar ${userData?.login}`}
          className='userData__avatar'
        />
        <ul className='userData__common_info'>
          <li>{name}</li>
          <li>{login}</li>
          <li>{location}</li>
          <li>{url}</li>
          <li>Join date {joinDate}</li>
          <li>{followers} Followers</li>
          <li>Following {following}</li>
        </ul>
      </div>
      <div className='userData__bottom'>
        <p>{biography}</p>
      </div>
    </div>
  );
};

export default memo(UserData);
