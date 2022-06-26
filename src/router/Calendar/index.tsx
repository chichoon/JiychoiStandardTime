import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import cx from 'classnames';

import { Error, Loading } from 'components';
import OverviewCalendar from './OverviewCalendar';

import styles from './calendar.module.scss';

const Calendar = () => {
  const handleErrorFallback = () => <Error message='달력을 불러올 수 없어요' />;

  return (
    <div className={cx('innerContainer', styles.calendarWrapper)}>
      <ErrorBoundary FallbackComponent={handleErrorFallback}>
        <Suspense fallback={<Loading />}>
          <OverviewCalendar />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Calendar;
