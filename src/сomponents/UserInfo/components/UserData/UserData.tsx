import { memo, useState } from "react";
import { UserData as UserDataType } from "../../../../types";
import "./UserData.scss";
type UserDataProps = {
  userData?: UserDataType;
};
type Print = {
  [key: string]: string;
};

const UserData = ({ userData }: UserDataProps) => {
  const [expandAvatar, setExpandAvatar] = useState(false);
  const print: Print = {};
  if (userData) {
    for (const key in userData) {
      print[key as keyof UserDataType] = !!userData[
        key as keyof UserDataType
      ]
        ? `${userData[key as keyof UserDataType]}`
        : "No " + key;
    }
  }
  const biography = !!userData?.bio
    ? userData.bio
    : "No biography";
  const handleAvatarSize = () => {
    setExpandAvatar((prevState) => !prevState);
  };

  return (
    <div className='userData'>
      <div
        className={
          !expandAvatar
            ? "userData__wrapper__inline"
            : "userData__wrapper__column"
        }
      >
        <img
          src={userData?.avatar_url}
          alt={"user avatar"}
          className={
            !expandAvatar
              ? "userData__avatar"
              : "userData__avatar__xl"
          }
          onClick={handleAvatarSize}
        />
        <ul className='userData__common_info'>
          <li>
            <strong>{print.name}</strong>
          </li>
          <li>{print.login}</li>
          <li>{print.location}</li>
          <li>{print.url}</li>
          <li>Join date {print.created_at.slice(0, 10)}</li>
          <li>{print.followers} Followers</li>
          <li>Following {print.following}</li>
        </ul>
      </div>
      <div className='userData__bottom'>
        <p>{biography}</p>
      </div>
    </div>
  );
};

export default memo(UserData);
