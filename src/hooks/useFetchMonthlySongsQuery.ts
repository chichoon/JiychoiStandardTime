import { useQuery } from 'react-query';

import { getMonthlySongs } from 'services';

export function useFetchMonthlySongsQuery(month: string, year: string) {
  return useQuery([`songlist-${year}${month}`], getMonthlySongs(year, month), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 12,
    cacheTime: 1000 * 60 * 60 * 12,
    retry: false,
    useErrorBoundary: true,
    suspense: true,
  });
}
