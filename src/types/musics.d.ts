import { TagType } from 'types/tags';

export interface SongListType {
  songs: SongType[];
}

export interface SongType {
  index: number;
  title: string;
  artist: string;
  comment: string;
  id: string;
  date: string;
  recommended?: string;
  tagList: TagType[];
}

export interface SongByDayType {
  [key: string]: SongType;
}
