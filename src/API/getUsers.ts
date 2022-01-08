import getFetch from "./getFetch";
import { BASE_API, URL_USERS_SEARCH } from "./constants";
import { GetUsersType } from "./types";
import { UsersResponseType } from "../types";

const getUsers: GetUsersType = async (userName: string) => {
  const formingUrl = `${BASE_API}${URL_USERS_SEARCH}?q=${userName}`;

  try {
    const data = await getFetch<UsersResponseType>(
      formingUrl
    );
    console.log("data", data);

    return data;
  } catch (e) {
    console.log("ups!!!", e);
  }
};

export default getUsers;
