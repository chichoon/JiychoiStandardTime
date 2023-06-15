import { Dispatch, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';
import cx from 'classnames';

import { MAXIMUM_DATE, MINIMUM_DATE } from 'utils/constants';

import styles from './calendarSelectMonth.module.scss';

interface Props {
  date: Dayjs;
  setDate: Dispatch<SetStateAction<Dayjs>>;
  setIsSelectMonthOpen: Dispatch<SetStateAction<boolean>>;
}

function checkIsMonthUnavailable(date: Dayjs, month: number) {
  if (date.month(month - 1).isAfter(MAXIMUM_DATE) || date.month(month - 1).isBefore(MINIMUM_DATE)) return true;
  return false;
}

const CalendarSelectMonth = ({ date, setDate, setIsSelectMonthOpen }: Props) => {
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function handleSelectMonthButtonClick(month: number) {
    if (checkIsMonthUnavailable(date, month)) return;
    setDate((prevState) => prevState.month(month - 1));
    setIsSelectMonthOpen(false);
  }

  return (
    <div className={styles.selectMonthWrapper}>
      {monthList.map((value) => (
        <button
          key={`select-month-${value}`}
          className={cx(styles.selectMonthButton, {
            [styles.isSelectedMonth]: date.month() + 1 === value,
            [styles.isUnavailable]: checkIsMonthUnavailable(date, value),
          })}
          type='button'
          onClick={() => handleSelectMonthButtonClick(value)}
        >
          {value}월
        </button>
      ))}
    </div>
  );
};

export default CalendarSelectMonth;
