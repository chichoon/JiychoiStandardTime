import dayjs from 'dayjs';

import getAllSongs from './getAllSongs';
import { SongByDayType } from 'types/musics';

const getAllSongsByDay = (): Promise<SongByDayType> =>
  getAllSongs().then((allSongsList) => {
    const allSongsByDay: SongByDayType = {};
    for (const song of allSongsList) {
      const key = dayjs(song.date).format('YYYY-MM-DD');
      allSongsByDay[key] = song;
    }
    return allSongsByDay;
  });

export default getAllSongsByDay;
