import { useQuery } from 'react-query';
import { getLatestSong } from 'services';

const useFetchLatestSong = () => {
  const { data } = useQuery(['latestSong'], getLatestSong, {
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 60 * 12,
    cacheTime: 1000 * 60 * 60 * 12,
    retry: false,
  });

  return data;
};

export default useFetchLatestSong;
