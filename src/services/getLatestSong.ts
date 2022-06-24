import axios from 'axios';

import { ISong } from 'types/musics';

const getLatestSong = (): Promise<ISong> =>
  axios.get('jst-songlist.json').then((response) => {
    const allSongsList: ISong[] = response.data.songs;

    if (!allSongsList[allSongsList.length - 1]) throw new Error();
    return allSongsList[allSongsList.length - 1];
  });

export default getLatestSong;
