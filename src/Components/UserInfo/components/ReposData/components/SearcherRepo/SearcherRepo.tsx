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
    <div className='reposData__search'>
      <Form.Control
        type='text'
        value={repoName}
        placeholder='Search for repos'
        onChange={handleReposSearch}
      />
    </div>
  );
};
export default SearcherRepo;
