import getFetch from "./getFetch";
import { UserData, RepoDataType } from "../types";

type GetUserDataType = (
  userDataUrl: string,
  reposDataUrl: string,
  setIsErrorUserInfo: (value: string) => void
) => Promise<
  | [UserData | undefined, RepoDataType[] | undefined]
  | undefined
>;

const getUserData: GetUserDataType = async (
  userDataUrl,
  reposDataUrl,
  setIsErrorUserInfo
) => {
  setIsErrorUserInfo("");
  try {
    const data = await Promise.all([
      getFetch<UserData>(userDataUrl),
      getFetch<RepoDataType[]>(reposDataUrl),
    ]);

    return data;
  } catch (e) {
    setIsErrorUserInfo(
      `Ups! Perhaps the limit of attempts has expired. ${e}`
    );
    console.log("ups!!! getUserData has a problem!!!", e);
  }
};

export default getUserData;
