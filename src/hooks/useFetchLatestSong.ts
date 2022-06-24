import { INIT_DATA } from 'utils/latestSongUtils';
import { useQuery } from 'react-query';
import { getLatestSong } from 'services';

const useFetchLatestSong = () => {
  const { data = INIT_DATA } = useQuery(['latestSong'], getLatestSong, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 12,
    cacheTime: 1000 * 60 * 60 * 12,
    retry: false,
    useErrorBoundary: true,
    suspense: true,
  });

  return data;
};

export default useFetchLatestSong;
