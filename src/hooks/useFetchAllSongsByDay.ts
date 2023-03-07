import { SongByDayType } from 'types/musics';
import { useFetchAllSongs } from './useFetchAllSongs';

export function useFetchAllSongsByDay() {
  const songList = useFetchAllSongs();

  return songList.reduce((acc: SongByDayType, song) => {
    const key = song.date.split(' ')[0];
    acc[key] = song;
    return acc;
  }, {});
}
