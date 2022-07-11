import { setFetchDelay } from '../utils/setFetchDelay';
import axios from 'axios';

import { ISong } from 'types/musics';

const getAllSongs = (): Promise<ISong[]> =>
  axios.get('/jst-songlist.json').then((response) => {
    const allSongsList: ISong[] = response.data.songs;

    return allSongsList;
  });

export default getAllSongs;
