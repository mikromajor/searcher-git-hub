import { ListGroup } from "react-bootstrap";
import { RepoDataType } from "../../../../../../types";

type ReposDataItemProps = {
  repo: RepoDataType;
};

const ReposDataItem = ({ repo }: ReposDataItemProps) => {
  return (
    <ListGroup.Item
      key={repo.id}
      variant='info'
      className={"reposData__item"}
    >
      <a href={repo.html_url} className={"reposData__link"}>
        <span className='reposData__name'>{repo.name}</span>
        <div className={"reposData__link__end"}>
          <span>{repo.forks_count} Forks</span>
          <span>{repo.stargazers_count} Stars</span>
        </div>
      </a>
    </ListGroup.Item>
  );
};
export default ReposDataItem;
