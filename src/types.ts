export type User = {
  avatar_url: string;
  html_url: string;
  login: string;
  id: number;
  repos_url: string;
  score: number;
  url: string;
};

export type UserData = User & {
  bio: null | string;
  created_at: string;
  followers: number;
  following: number;
  location: null | string;
  email: null | string;
  public_repos: number;
  name: null | string;
};

export type RepoData = {
  html_url: string;
  forks_count: number;
  name: string;
  stargazers_count: number;
  id: number;
};

export type UsersResponseType = {
  incomplete_results: boolean;
  items: User[];
  total_count: number;
};

export type CurrentUserType = {
  userData?: UserData;
  reposData?: RepoData[];
} | null;

export type PageCacheValueType = {
  cacheUserName: string;
  cacheUsersCount: number;
  cacheUsers: User[];
  cacheCurrentUser: CurrentUserType;
};
