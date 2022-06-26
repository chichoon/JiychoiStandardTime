import { TagType } from 'types/tags';

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
  tagList: TagType[];
}

export interface ISongsByDay {
  [key: string]: ISong;
}
