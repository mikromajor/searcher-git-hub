import { PageCacheValueType } from "../types";

import { INITIAL_PAGE_CACHE_DATA } from "../constants";

class PageCache {
  set(value: Partial<PageCacheValueType>) {
    const prevState = this.get();

    localStorage.setItem(
      "pageState",
      JSON.stringify({ ...prevState, ...value })
    );
  }

  get() {
    const value = localStorage.getItem("pageState");
    return value
      ? JSON.parse(value)
      : INITIAL_PAGE_CACHE_DATA;
  }
}

const pageCache = new PageCache();

export default pageCache;
