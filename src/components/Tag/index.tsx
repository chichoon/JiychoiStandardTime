import { MouseEvent } from 'react';

import { TagType } from 'types/tags';
import { KOR_TAG_NAME } from 'utils/constants';

import styles from './tag.module.scss';

interface Props {
  tagName: TagType;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Tag = ({ tagName, onClick }: Props) => {
  const korTagName = KOR_TAG_NAME[tagName];

  return (
    <button type='button' onClick={onClick} className={styles.tag}>
      {korTagName}
    </button>
  );
};
