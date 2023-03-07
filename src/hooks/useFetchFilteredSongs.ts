import { TagType } from 'types/tags';
import { useFetchAllSongs } from './useFetchAllSongs';

export function useFetchFilteredSongs(tagList: TagType[]) {
  const songlist = useFetchAllSongs();

  return songlist.filter((song) => tagList.every((tag) => song.tagList.includes(tag)));
}
