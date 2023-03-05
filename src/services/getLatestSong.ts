import getAllSongs from './getAllSongs';
import { SongType } from 'types/musics';

const getLatestSong = (): Promise<SongType> =>
  getAllSongs().then((allSongsList) => {
    if (allSongsList.length < 1) throw new Error();
    return allSongsList[allSongsList.length - 1];
  });

export default getLatestSong;
