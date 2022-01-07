export interface IPageCacheValue {
  userName: string;
  usersCount: number;
  users: any[];
  currentUser: any;
}

export type USER = {
  name: string;
  id: number;
  img: string;
  [key: string]: string | number;
};
