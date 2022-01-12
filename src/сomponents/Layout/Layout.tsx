import { useState, useContext } from "react";
import { PageContext } from "../../context";
import { UsersInfo } from "../.";
import { UserInfo } from "../UserInfo";
import { Loader, Error } from "../../ui";

import "./Layout.scss";

const Layout = () => {
  const { cacheCurrentUser } = useContext(PageContext);
  const [currentUser, setCurrentUser] = useState(
    cacheCurrentUser
  );
  const [isUserInfoLoad, setIsUserInfoLoad] =
    useState(false);
  const [isErrorUserInfo, setIsErrorUserInfo] =
    useState("");

  return (
    <div className={"layout"}>
      <UsersInfo
        setCurrentUser={setCurrentUser}
        setIsUserInfoLoad={setIsUserInfoLoad}
        setIsErrorUserInfo={setIsErrorUserInfo}
      />
      {!!isErrorUserInfo ? (
        <Error message={isErrorUserInfo} />
      ) : isUserInfoLoad ? (
        <div className='layout__wrapper_for_loader'>
          <Loader />
        </div>
      ) : (
        <UserInfo currentUser={currentUser} />
      )}
    </div>
  );
};
export default Layout;
