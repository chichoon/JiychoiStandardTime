import { useQuery } from 'react-query';
import { getSongsList } from 'services';

const INIT_DATA = {
  index: 0,
  title: '',
  artist: '',
  comment: '',
  id: '',
  date: '',
  tagList: [],
};

const useFetchLatestSong = () => {
  const { data = { songs: [] } } = useQuery(['latestSong'], getSongsList, {
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 60 * 12,
    cacheTime: 1000 * 60 * 60 * 12,
    retry: false,
  });

  const { length } = data.songs;
  if (!length) return INIT_DATA;
  return data.songs[length - 1];
};

export default useFetchLatestSong;
