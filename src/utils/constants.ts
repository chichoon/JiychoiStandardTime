import { SongType } from 'types/musics';

export const YEAR_LIST = [
  { year: '2021', month: '08' },
  { year: '2021', month: '09' },
  { year: '2021', month: '10' },
  { year: '2021', month: '11' },
  { year: '2021', month: '12' },
  { year: '2022', month: '01' },
  { year: '2022', month: '02' },
  { year: '2022', month: '03' },
  { year: '2022', month: '04' },
  { year: '2022', month: '05' },
  { year: '2022', month: '06' },
  { year: '2022', month: '07' },
  { year: '2022', month: '08' },
  { year: '2022', month: '09' },
  { year: '2022', month: '10' },
  { year: '2022', month: '11' },
  { year: '2022', month: '12' },
  { year: '2023', month: '01' },
  { year: '2023', month: '02' },
  { year: '2023', month: '03' },
] as const;

export const MINIMUM_DATE = '2021-08-01';
export const MAXIMUM_DATE = '2023-04-14';

export const INIT_DATA: SongType = {
  index: -1,
  title: 'No Title',
  artist: '',
  comment: '',
  id: '',
  date: '',
  tagList: [],
};

export const KOR_TAG_NAME = {
  excited: '신나요',
  sad: '아련해요',
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
} as const;

export const NAVLINK_DATA = [
  { link: 'main', title: '오늘' },
  { link: 'calendar', title: '달력' },
  { link: 'mood', title: '기분' },
];
