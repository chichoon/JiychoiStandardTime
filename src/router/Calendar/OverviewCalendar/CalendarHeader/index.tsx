import dayjs, { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';

import styles from './calendarHeader.module.scss';

interface Props {
  date: Dayjs;
  setDate: Dispatch<SetStateAction<Dayjs>>;
  setIsSelectMonthOpen: Dispatch<SetStateAction<boolean>>;
}

const CalendarHeader = ({ date, setDate, setIsSelectMonthOpen }: Props) => {
  function handleOpenMonthChange() {
    setIsSelectMonthOpen((prevState) => !prevState);
  }

  function handleYearBeforeButtonClick() {
    setDate((prevState) => prevState.add(-1, 'year'));
  }

  function handleYearAfterButtonClick() {
    setDate((prevState) => prevState.add(1, 'year'));
  }

  function handleMonthBeforeButtonClick() {
    setDate((prevState) => prevState.add(-1, 'month'));
  }

  function handleMonthAfterButtonClick() {
    setDate((prevState) => prevState.add(1, 'month'));
  }

  return (
    <div className={styles.calendarHeaderWrapper}>
      <button className={styles.calendarHeaderButton} type='button' onClick={handleYearBeforeButtonClick}>
        {'<<'}
      </button>
      <button className={styles.calendarHeaderButton} type='button' onClick={handleMonthBeforeButtonClick}>
        {'<'}
      </button>
      <button className={styles.calendarHeaderTitleButton} type='button' onClick={handleOpenMonthChange}>
        {dayjs(date).format('MMMM YYYY')}
      </button>
      <button className={styles.calendarHeaderButton} type='button' onClick={handleMonthAfterButtonClick}>
        {'>'}
      </button>
      <button className={styles.calendarHeaderButton} type='button' onClick={handleYearAfterButtonClick}>
        {'>>'}
      </button>
    </div>
  );
};

export default CalendarHeader;
