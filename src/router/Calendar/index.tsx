import cx from 'classnames';
import dayjs from 'dayjs';

import { MAXIMUM_DATE } from 'utils/constants';
import OverviewCalendar from './OverviewCalendar';

import styles from './calendar.module.scss';

export const Calendar = () => {
  const today = dayjs();
  const maxDate = dayjs(MAXIMUM_DATE);

  return (
    <main className={cx('innerContainer', styles.calendarWrapper)}>
      <OverviewCalendar today={today} maxDate={maxDate} />
    </main>
  );
};
