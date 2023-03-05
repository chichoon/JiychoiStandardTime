import { useQueries } from 'react-query';

import { getMonthlySongs } from 'services';
import { YEAR_LIST } from 'utils/constants';

export function useFetchAllSongs() {
  const res = useQueries(
    YEAR_LIST.map(({ month, year }) => ({
      queryKey: [`songlist-${year}${month}`],
      queryFn: getMonthlySongs(year, month),
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 12,
      cacheTime: 1000 * 60 * 60 * 12,
      suspense: true,
      useErrorBoundary: true,
      retry: false,
    }))
  );

  console.log(res);

  return res;
}
