import { useSelector } from 'react-redux';
import { getSelectedTags } from 'states/selectedTagInfo';
import { useFetchAllSongs } from './useFetchAllSongs';

export function useFetchFilteredSongs() {
  const songList = useFetchAllSongs();
  const tagList = useSelector(getSelectedTags);

  return songList.filter((song) => tagList.every((tag) => song.tagList.includes(tag)));
}
