import dayjs from 'dayjs';

import getAllSongs from './getAllSongs';
import { ISongsByDay } from 'types/musics';

const getAllSongsByDay = (): Promise<ISongsByDay> =>
  getAllSongs().then((allSongsList) => {
    const allSongsByDay: ISongsByDay = {};
    for (const song of allSongsList) {
      const key = dayjs(song.date).format('YYYY-MM-DD');
      allSongsByDay[key] = song;
    }
    return allSongsByDay;
  });

export default getAllSongsByDay;
