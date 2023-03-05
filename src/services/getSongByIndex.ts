import getAllSongs from './getAllSongs';
import { SongType } from 'types/musics';

const getSongByIndex = (index: number): Promise<SongType> =>
  getAllSongs().then((allSongsList) => {
    if (isNaN(index)) throw new Error();
    if (!allSongsList[index]) throw new Error();
    return allSongsList[index];
  });

export default getSongByIndex;
