import { Dayjs } from 'dayjs';
import cx from 'classnames';

import { getMonthArray } from 'utils/calendarUtils';

import styles from './calendarBody.module.scss';

interface IProps {
  date: Dayjs;
}

const CalendarBody = ({ date }: IProps) => {
  const monthArray = getMonthArray(date);

  return (
    <div
      className={styles.calendarBodyWrapper}
      style={{ gridTemplateRows: `repeat(${monthArray.numOfDate / 7}, 1fr)` }}
    >
      {monthArray.lastMonthArr.map((v) => (
        <div key={`calendar-last-month-${v}`} className={cx(styles.date, styles.otherMonthDate)}>
          {v}
        </div>
      ))}
      {monthArray.thisMonthArr.map((v) => (
        <div key={`calendar-this-month-${v}`} className={cx(styles.date, styles.thisMonthDate)}>
          {v}
        </div>
      ))}
      {monthArray.nextMonthArr.map((v) => (
        <div key={`calendar-next-month-${v}`} className={cx(styles.otherMonthDate, styles.date)}>
          {v}
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;
