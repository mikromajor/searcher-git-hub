import { FC } from "react";
import { Form } from "react-bootstrap";

type SearcherRepoProps = {
  repoName: string;
  handleReposSearch: (e: any) => void;
};

const SearcherRepo: FC<SearcherRepoProps> = ({
  repoName,
  handleReposSearch,
}) => {
  return (
    <>
      <Form.Control
        type='text'
        value={repoName}
        placeholder='Search for repos'
        onChange={handleReposSearch}
        className='reposData__search'
      />
    </>
  );
};
export default SearcherRepo;
