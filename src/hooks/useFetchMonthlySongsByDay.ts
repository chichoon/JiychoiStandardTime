import { SongByDayType } from 'types/musics';
import { useFetchMonthlySongs } from './useFetchMonthlySongs';

export function useFetchMonthlySongsByDay(year: string, month: string) {
  const songlist = useFetchMonthlySongs(year, month);

  return songlist.reduce((acc: SongByDayType, song) => {
    const key = song.date.split(' ')[0];
    acc[key] = song;
    return acc;
  }, {});
}
