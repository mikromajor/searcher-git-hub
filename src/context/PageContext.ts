import { createContext } from "react";
import { INITIAL_PAGE_CACHE_DATA } from "../constants";
import { PageCacheValueType } from "../types";

const PageContext = createContext<PageCacheValueType>(
  INITIAL_PAGE_CACHE_DATA
);

export default PageContext;
