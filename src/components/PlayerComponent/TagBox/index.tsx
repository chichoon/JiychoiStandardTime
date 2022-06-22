import { Tag } from 'components';

interface IProps {
  tagList: string[];
}

const TagBox = ({ tagList }: IProps) => {
  return (
    <ul>
      {tagList.map((tag) => (
        <li key={`tag-${tag}`}>
          <Tag tagName={tag} />
        </li>
      ))}
    </ul>
  );
};

export default TagBox;
