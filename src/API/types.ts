export type GetUsersType = (username: string,setIsError:(value:string)=>void) => Promise<
  | {
      items: any;
      total_count: number;
    }
  | undefined
>;

export type GetUsersDataType = () => Promise<{
  ARR: [];
}>;
