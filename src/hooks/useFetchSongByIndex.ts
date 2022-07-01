import { useQuery } from 'react-query';

import { getSongByIndex } from 'services';
import { INIT_DATA } from 'utils/latestSongUtils';

const useFetchSongByIndex = (index: number) => {
  const { data = INIT_DATA } = useQuery(['indexSong', index], () => getSongByIndex(index), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 12,
    cacheTime: 1000 * 60 * 60 * 12,
    retry: false,
    enabled: index >= 0,
    useErrorBoundary: true,
    suspense: true,
  });

  return data;
};

export default useFetchSongByIndex;
