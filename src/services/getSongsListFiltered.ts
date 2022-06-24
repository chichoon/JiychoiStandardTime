import axios from 'axios';

import { ISong } from 'types/musics';
import { TagType } from 'types/tags';

const getSongsListFiltered = (tagList: TagType[]) =>
  axios.get('jst-songlist.json').then((response) => {
    const allSongsList: ISong[] = response.data.songs;
    if (!allSongsList) return [] as ISong[];
    if (tagList.length === 0) return allSongsList;
    return allSongsList.filter(() => allSongsList.some((song) => tagList.every((tag) => song.tagList.includes(tag))));
  });

export default getSongsListFiltered;
