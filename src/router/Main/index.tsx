import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import cx from 'classnames';

import { Error, Loading, PlayerComponent } from 'components';
import { useFetchAllSongs } from 'hooks';
import { INIT_DATA } from 'utils/constants';

const Main = () => {
  const songList = useFetchAllSongs();
  const handleErrorFallback = () => <Error message='노래를 불러올 수 없어요' />;

  return (
    <main className={cx('innerContainer')}>
      <ErrorBoundary FallbackComponent={handleErrorFallback}>
        <Suspense fallback={<Loading />}>
          <PlayerComponent song={songList[songList.length - 1] ?? INIT_DATA} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default Main;
