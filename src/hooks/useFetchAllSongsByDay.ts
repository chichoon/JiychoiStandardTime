import { useFetchAllSongs } from './useFetchAllSongs';

export function useFetchAllSongsByDay() {
  const res = useFetchAllSongs();

  res.map(({ data }) => {
    console.log(data);
  });
}
