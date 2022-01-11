import { PageContext } from "./context";
import { Layout } from "./сomponents";
import { PageCache } from "./utils";

import "./App.scss";

const App = () => {
  console.log("APP render");

  return (
    <PageContext.Provider value={PageCache.get()}>
      <div className={"app"}>
        <Layout />
      </div>
    </PageContext.Provider>
  );
};
export default App;
