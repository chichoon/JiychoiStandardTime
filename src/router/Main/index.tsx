import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import cx from 'classnames';

import { Error, Loading } from 'components';
import MainInner from './MainInner';

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
