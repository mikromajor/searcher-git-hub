import {
  memo,
  useState,
  useCallback,
  useEffect,
} from "react";
import { ListGroup } from "react-bootstrap";
import { RepoDataType } from "../../../../types";
import { ReposDataItem, SearcherRepo } from "./components";

import "./ReposData.scss";

type ReposDataProps = {
  reposData?: RepoDataType[];
};

const ReposData = ({ reposData }: ReposDataProps) => {
  const [repoName, setRepoName] = useState("");
  const [filteredReposData, setFilteredReposData] =
    useState([...(reposData || [])]);

  const handleReposSearch = useCallback((e) => {
    const searchValue = e.target.value;
    setRepoName(searchValue);
  }, []);

  useEffect(() => {
    const newFilteredRepos = (reposData || []).filter(
      (repo) => repo.name.startsWith(repoName)
    );

    setFilteredReposData(newFilteredRepos);
  }, [repoName, reposData]);

  return (
    <>
      {filteredReposData && (
        <div className={"reposData"}>
          <SearcherRepo
            repoName={repoName}
            handleReposSearch={handleReposSearch}
          />

          <ListGroup className={"usersList"}>
            {!!filteredReposData.length ? (
              filteredReposData.map((repo) => (
                <ReposDataItem repo={repo} />
              ))
            ) : (
              <p>No searched repos</p>
            )}
          </ListGroup>
        </div>
      )}
    </>
  );
};

export default memo(ReposData);
