import { MouseEvent } from 'react';

import styles from './tag.module.scss';

interface IProps {
  tagName: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Tag = ({ tagName, onClick }: IProps) => {
  const korTagName = {
    excited: '신나요',
    peaceful: '차분해요',
    coding: '코딩중',
    fast: '빨라요',
    slow: '느려요',
    happy: '행복해요',
    angry: '화나요',
    sad: '슬퍼요',
    loud: '시끄러워요',
    quiet: '조용해요',
    inst: '보컬이 없어요',
  }[tagName];

  return (
    <button type='button' onClick={onClick ?? undefined} className={styles.tag}>
      {korTagName}
    </button>
  );
};

export default Tag;
