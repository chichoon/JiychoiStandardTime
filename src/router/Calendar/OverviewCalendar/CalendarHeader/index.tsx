import dayjs, { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';

import styles from './calendarHeader.module.scss';

interface IProps {
  date: Dayjs;
  setDate: Dispatch<SetStateAction<Dayjs>>;
  setIsSelectMonthOpen: Dispatch<SetStateAction<boolean>>;
}

const CalendarHeader = ({ date, setDate, setIsSelectMonthOpen }: IProps) => {
  const handleOpenMonthChange = () => {
    setIsSelectMonthOpen((prevState) => !prevState);
  };

  const handleYearBeforeButtonClick = () => {
    setDate((prevState) => prevState.add(-1, 'year'));
  };

  const handleYearAfterButtonClick = () => {
    setDate((prevState) => prevState.add(1, 'year'));
  };

  const handleMonthBeforeButtonClick = () => {
    setDate((prevState) => prevState.add(-1, 'month'));
  };

  const handleMonthAfterButtonClick = () => {
    setDate((prevState) => prevState.add(1, 'month'));
  };

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
