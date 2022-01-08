export type User = {
  avatar_url: string;
  html_url: string;
  login: string;
  id: number;
  repos_url: string;
  score: number;
  url: string;
  [key: string]: string | number;
};

export type UsersResponseType = {
  incomplete_results: boolean;
  items: User[];
  total_count: number;
};

export type PageContextValueType = {
  userName: string;
  usersCount: number;
  users: User[];
  currentUser: User;
};

export type PageCacheValueType = {
  cacheUserName: string;
  cacheUsersCount: number;
  cacheUsers: User[];
  cacheCurrentUser: User | null;
};
