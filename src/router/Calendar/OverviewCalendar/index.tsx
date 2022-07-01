import { useState } from 'react';
import dayjs from 'dayjs';

import CalendarHeader from './CalendarHeader';
import CalendarSelectMonth from './CalendarSelectMonth';
import CalendarBody from './CalendarBody';

import styles from './overviewCalendar.module.scss';

const today = dayjs();

const OverviewCalendar = () => {
  const [date, setDate] = useState(today);
  const [isSelectMonthOpen, setIsSelectMonthOpen] = useState(false);

  return (
    <div className={styles.calendarWrapper}>
      <CalendarHeader date={date} setDate={setDate} setIsSelectMonthOpen={setIsSelectMonthOpen} />
      <div className={styles.calendarBottom}>
        {isSelectMonthOpen ? (
          <CalendarSelectMonth date={date} setDate={setDate} setIsSelectMonthOpen={setIsSelectMonthOpen} />
        ) : (
          <CalendarBody date={date} />
        )}
      </div>
    </div>
  );
};

export default OverviewCalendar;
