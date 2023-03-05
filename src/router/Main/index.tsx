import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import cx from 'classnames';

import { Error, Loading, PlayerComponent } from 'components';
import { INIT_DATA } from 'utils/constants';

const MainInner = () => {
  const todaySong = INIT_DATA; // TODO: 수정
  return <PlayerComponent song={todaySong} />;
};

const Main = () => {
  const handleErrorFallback = () => <Error message='노래를 불러올 수 없어요' />;
  return (
    <main className={cx('innerContainer')}>
      <ErrorBoundary FallbackComponent={handleErrorFallback}>
        <Suspense fallback={<Loading />}>
          <MainInner />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default Main;
