import axios from 'axios';

import { SongType } from 'types/musics';

const getAllSongs = (): Promise<SongType[]> =>
  axios.get('/jst-songlist.json').then((response) => {
    const allSongsList: SongType[] = response.data;

    return allSongsList;
  });

export default getAllSongs;
