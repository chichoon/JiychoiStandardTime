import { useQuery } from 'react-query';

import { ISongsByDay } from 'types/musics';
import { getAllSongsByDay } from 'services';

const INIT_DATA: ISongsByDay = {};

const useFetchAllSongsByDay = () => {
  const { data = INIT_DATA } = useQuery(['allSongs'], getAllSongsByDay, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 12,
    cacheTime: 1000 * 60 * 60 * 12,
    retry: false,
  });

  return data;
};

export default useFetchAllSongsByDay;
