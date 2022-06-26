import cx from 'classnames';

import { Error, Loading } from 'components';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CalendarInner from './CalendarInner';

const Calendar = () => {
  const handleErrorFallback = () => <Error message='달력을 불러올 수 없어요' />;

  return (
    <div className={cx('innerContainer')}>
      <ErrorBoundary FallbackComponent={handleErrorFallback}>
        <Suspense fallback={<Loading />}>
          <CalendarInner />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Calendar;
