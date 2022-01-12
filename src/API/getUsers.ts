import getFetch from "./getFetch";
import { BASE_API, URL_USERS_SEARCH } from "./constants";
import { GetUsersType } from "./types";
import { UsersResponseType } from "../types";

const getUsers: GetUsersType = async (
  userName,
  setIsError
) => {
  const formingUrl = `${BASE_API}${URL_USERS_SEARCH}?q=${userName}`;
  setIsError("");
  try {
    const data = await getFetch<UsersResponseType>(
      formingUrl
    );
    console.log("data", data);
    return data;
  } catch (e) {
    setIsError(`Ups!!! Can't load users list. ${e}`);
    console.log("ups!!!", e);
  }
};

export default getUsers;
