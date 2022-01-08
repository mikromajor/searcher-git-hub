import { useState, useContext } from "react";
import { PageContext } from "../../context";
import { User } from "../../types";
import { Title } from "../../ui";
import {} from "react-bootstrap";

import "./UserInfo.scss";

type UserInfoProps = {
  userInfo: User | null;
};

const UserInfo = ({ userInfo }: UserInfoProps) => {
  return (
    <>
      {userInfo && (
        <div className='userInfo'>
          <Title />
          <img
            src={`${userInfo.avatar_url}`}
            alt={`avatar ${userInfo.login}`}
            className={"user__avatar"}
          />
          <div className='user__common_info'>
            <p>{`${userInfo.login}`}</p>
            <p>{`${userInfo.url}`}</p>
            <p>{`${userInfo.avatar_url}`}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default UserInfo;
