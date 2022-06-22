export interface ISongsList {
  songs: ISong[];
}

export interface ISong {
  index: number;
  title: string;
  artist: string;
  comment: string;
  id: string;
  date: string;
  recommended?: string;
  tag: string[];
}

/*
  TODO: 생각중인 태그 목록
  신나요 (excited)
  차분해요 (peaceful)
  코딩해요 (coding)
  빨라요 (fast)
  느려요 (slow)
  행복해요 (happy)
  화나요 (angry)
  슬퍼요 (sad)
  시끄러워요 (loud)
  조용해요 (quiet)
  보컬이 없어요 (inst)
  */
