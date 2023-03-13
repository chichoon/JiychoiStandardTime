import { useQuery } from 'react-query';

import { getMonthlySongs } from 'services';
import { SongType } from 'types/musics';

export function useFetchMonthlySongs(month: string, year: string): SongType[] {
  const { data = [] } = useQuery([`songList-${year}${month}`], getMonthlySongs(year, month), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 12,
    cacheTime: 1000 * 60 * 60 * 12,
    retry: false,
    useErrorBoundary: true,
    suspense: true,
  });

  return data;
}
