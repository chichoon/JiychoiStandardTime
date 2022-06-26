import axios from 'axios';

import { ISong } from 'types/musics';

const getSongByIndex = (index: number): Promise<ISong> =>
  axios.get('jst-songlist.json').then((response) => {
    const allSongsList: ISong[] = response.data.songs;

    if (!allSongsList[index]) throw new Error();
    return allSongsList[index];
  });

export default getSongByIndex;
