export type GetUsersType = (username: string) => Promise<{
  items: any;
  total_count: number;
}>;
