import { useDispatch, useSelector } from 'react-redux';

import { Tag } from 'components';
import { deselectTag, getSelectableTags, getSelectedTags, selectTag } from 'states/selectedTagInfo';
import { TagType } from 'types/tags';

import styles from './tagSelector.module.scss';

const TagSelector = () => {
  const selectableTags = useSelector(getSelectableTags);
  const selectedTags = useSelector(getSelectedTags);
  const dispatch = useDispatch();

  const handleTagClick = (tagName: TagType) => dispatch(selectTag(tagName));

  const handleSelectedTagClick = (tagName: TagType) => dispatch(deselectTag(tagName));

  return (
    <div className={styles.tagSelectorWrapper}>
      <p className={styles.tagSelectorLabel}>선택할 수 있는 태그</p>
      <ul className={styles.tagList}>
        {selectableTags.map((tag) => (
          <li key={`selectable-${tag}`}>
            <Tag tagName={tag} onClick={() => handleTagClick(tag)} />
          </li>
        ))}
      </ul>
      <p className={styles.tagSelectorLabel}>선택한 태그</p>
      <ul className={styles.tagList}>
        {selectedTags.map((tag) => (
          <li key={`selected-${tag}`}>
            <Tag tagName={tag} onClick={() => handleSelectedTagClick(tag)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagSelector;
