import { Tag } from 'components';
import { useDispatch, useSelector } from 'react-redux';

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
      <ul className={styles.selectableTagList}>
        {selectableTags.map((tag) => (
          <li key={`selectable-${tag}`}>
            <Tag tagName={tag} onClick={() => handleTagClick(tag)} />
          </li>
        ))}
      </ul>
      <ul className={styles.selectedTagList}>
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
