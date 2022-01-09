import getFetch from "./getFetch";
import { UserData, RepoData } from "../types";

type GetUserDataType = (
  userDataUrl: string,
  reposDataUrl: string
) => Promise<
  [UserData | undefined, RepoData[] | undefined] | undefined
>;

const getUserData: GetUserDataType = async (
  userDataUrl,
  reposDataUrl
) => {
  try {
    const data = await Promise.all([
      getFetch<UserData>(userDataUrl),
      getFetch<RepoData[]>(reposDataUrl),
    ]);

    return data;
  } catch (e) {
    console.log("ups!!! getUserData has a problem!!!", e);
  }
};

export default getUserData;
