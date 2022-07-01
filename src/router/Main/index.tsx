import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import cx from 'classnames';

import { Error, Loading, PlayerComponent } from 'components';
import { useFetchLatestSong } from 'hooks';

const MainInner = () => {
  const todaySong = useFetchLatestSong();
  return <PlayerComponent song={todaySong} loop />;
};

const Main = () => {
  const handleErrorFallback = () => <Error message='노래를 불러올 수 없어요' />;
  return (
    <div className={cx('innerContainer')}>
      <ErrorBoundary FallbackComponent={handleErrorFallback}>
        <Suspense fallback={<Loading />}>
          <MainInner />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Main;
