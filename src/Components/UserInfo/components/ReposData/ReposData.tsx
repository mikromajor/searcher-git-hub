import {
  memo,
  useState,
  useCallback,
  useEffect,
} from "react";
import { Form, ListGroup } from "react-bootstrap";
import { RepoData } from "../../../../types";

type ReposDataProps = {
  reposData?: RepoData[];
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
    <div>
      {filteredReposData && (
        <>
          <Form.Control
            type='text'
            value={repoName}
            placeholder='Search for repos'
            onChange={handleReposSearch}
          />
          <ListGroup className={"usersList"}>
            {!!filteredReposData.length ? (
              filteredReposData.map((repo) => (
                <ListGroup.Item
                  key={repo.id}
                  variant='info'
                >
                  <span>{repo.name}</span>
                </ListGroup.Item>
              ))
            ) : (
              <p>No searched repos</p>
            )}
          </ListGroup>
        </>
      )}
    </div>
  );
};

export default memo(ReposData);
