import getAllSongs from './getAllSongs';
import { TagType } from 'types/tags';

const getSongsListFiltered = (tagList: TagType[]) =>
  getAllSongs().then((allSongsList) => {
    if (!allSongsList) throw new Error();
    if (tagList.length === 0) return allSongsList;
    return allSongsList.filter((song) => tagList.every((tag) => song.tagList.includes(tag)));
  });

export default getSongsListFiltered;
