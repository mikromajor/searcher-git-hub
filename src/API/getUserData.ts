import getFetch from "./getFetch";
import { User, UserData, RepoData } from "../types";

type GetUserDataType = (
  userInfo: User
) => Promise<
  [UserData | undefined, RepoData[] | undefined] | undefined
>;

const getUserData: GetUserDataType = async (userInfo) => {
  try {
    const data = await Promise.all([
      getFetch<UserData>(userInfo.url),
      getFetch<RepoData[]>(userInfo.repos_url),
    ]);

    return data;
  } catch (e) {
    console.log("ups!!! getUserData has a problem!!!", e);
  }
};

export default getUserData;
