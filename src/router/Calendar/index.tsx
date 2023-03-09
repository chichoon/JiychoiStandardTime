import cx from 'classnames';

import OverviewCalendar from './OverviewCalendar';

import styles from './calendar.module.scss';

export const Calendar = () => {
  return (
    <main className={cx('innerContainer', styles.calendarWrapper)}>
      <OverviewCalendar />
    </main>
  );
};
