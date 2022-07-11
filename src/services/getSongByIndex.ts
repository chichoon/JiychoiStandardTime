import getAllSongs from './getAllSongs';
import { ISong } from 'types/musics';

const getSongByIndex = (index: number): Promise<ISong> =>
  getAllSongs().then((allSongsList) => {
    if (isNaN(index)) throw new Error();
    if (!allSongsList[index]) throw new Error();
    return allSongsList[index];
  });

export default getSongByIndex;
