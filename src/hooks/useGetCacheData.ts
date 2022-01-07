import { useEffect, useState } from "react";
import { PageCache } from "../utils";
import { IPageCacheValue } from "../types";
import { INITIAL_PAGE_DATA } from "../constants";

const useGetCacheData = () => {
  console.log("useGetCacheData render");
  const [cacheUserName, setCacheUserName] = useState(
    INITIAL_PAGE_DATA.userName
  );
  const [cacheUsersCount, setCacheUsersCount] = useState(
    INITIAL_PAGE_DATA.usersCount
  );
  const [cacheUsers, setCacheUsers] = useState<any[]>(
    INITIAL_PAGE_DATA.users
  );
  const [cacheCurrentUser, setCacheCurrentUser] = useState(
    INITIAL_PAGE_DATA.currentUser
  );

  console.log("cacheUserName: ", cacheUserName);

  // get initial page data from cache
  useEffect(() => {
    console.log("useGetCacheData effect");

    const pageCache: IPageCacheValue = PageCache.get();

    const { userName, usersCount, users, currentUser } =
      pageCache;

    setCacheUserName("test");
    setCacheUsersCount(usersCount);
    setCacheUsers(users);
    setCacheCurrentUser(currentUser);
  }, []);

  return {
    cacheUserName,
    cacheUsersCount,
    cacheUsers,
    cacheCurrentUser,
  };
};

export default useGetCacheData;
