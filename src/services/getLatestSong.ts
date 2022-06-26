import { ISong } from 'types/musics';
import getAllSongs from './getAllSongs';

const getLatestSong = (): Promise<ISong> =>
  getAllSongs().then((allSongsList) => {
    if (allSongsList.length < 1) throw new Error();
    return allSongsList[allSongsList.length - 1];
  });

export default getLatestSong;
