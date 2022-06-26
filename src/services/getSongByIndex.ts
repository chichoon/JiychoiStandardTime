import { ISong } from 'types/musics';
import getAllSongs from './getAllSongs';

const getSongByIndex = (index: number): Promise<ISong> =>
  getAllSongs().then((allSongsList) => {
    if (!allSongsList[index]) throw new Error();
    return allSongsList[index];
  });

export default getSongByIndex;
