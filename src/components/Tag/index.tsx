import { MouseEvent } from 'react';

import { TagType } from 'types/tags';

import styles from './tag.module.scss';

interface IProps {
  tagName: TagType;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Tag = ({ tagName, onClick }: IProps) => {
  const korTagName = {
    excited: '신나요',
    sad: '조금 슬퍼요',
    loud: '음량이 커요',
    peaceful: '차분해요',
    coding: '코딩중',
    fast: '속도감 있어요',
    slow: '느긋해요',
    woman: '여자 보컬',
    man: '남자 보컬',
    both: '혼성 보컬',
    full: '풍성해요',
    live: '라이브 음원',
    band: '밴드 사운드',
    orchestra: '오케스트라 사운드',
    guitar: '훌륭한 기타',
    piano: '경쾌한 피아노',
    classic: '클래식 또는 재즈',
    bass: '끝내주는 베이스',
    inst: '보컬이 없어요',
  }[tagName];

  return (
    <button type='button' onClick={onClick ?? undefined} className={styles.tag}>
      {korTagName}
    </button>
  );
};

export default Tag;
