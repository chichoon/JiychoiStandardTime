import { Tag } from 'components';

import styles from './tagBox.module.scss';

interface IProps {
  tagList: string[];
}

const TagBox = ({ tagList }: IProps) => {
  return (
    <ul className={styles.tagBoxWrapper}>
      {tagList.map((tag) => (
        <li key={`tag-${tag}`}>
          <Tag tagName={tag} />
        </li>
      ))}
    </ul>
  );
};

export default TagBox;
