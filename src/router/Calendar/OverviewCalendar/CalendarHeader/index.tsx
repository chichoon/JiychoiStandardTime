import { Dispatch, SetStateAction } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { MAXIMUM_DATE, MINIMUM_DATE } from 'utils/constants';
import { CalendarHeaderButton } from './CalendarHeaderButton';

import styles from './calendarHeader.module.scss';

interface Props {
  date: Dayjs;
  setDate: Dispatch<SetStateAction<Dayjs>>;
  setIsSelectMonthOpen: Dispatch<SetStateAction<boolean>>;
}

const CalendarHeader = ({ date, setDate, setIsSelectMonthOpen }: Props) => {
  const isYearBeforeButtonUnavailable = date.add(-1, 'year').isBefore(dayjs(MINIMUM_DATE));
  const isYearAfterButtonUnavailable = date.add(1, 'year').isAfter(dayjs(MAXIMUM_DATE));
  const isMonthBeforeButtonUnavailable = date.add(-1, 'month').isBefore(dayjs(MINIMUM_DATE));
  const isMonthAfterButtonUnavailable = date.add(1, 'month').isAfter(dayjs(MAXIMUM_DATE));

  function handleOpenMonthChange() {
    setIsSelectMonthOpen((prevState) => !prevState);
  }

  function handleYearBeforeButtonClick() {
    if (isYearBeforeButtonUnavailable) return;
    setDate((prevState) => prevState.add(-1, 'year'));
  }

  function handleYearAfterButtonClick() {
    if (isYearAfterButtonUnavailable) return;
    setDate((prevState) => prevState.add(1, 'year'));
  }

  function handleMonthBeforeButtonClick() {
    if (isMonthBeforeButtonUnavailable) return;
    setDate((prevState) => prevState.add(-1, 'month'));
  }

  function handleMonthAfterButtonClick() {
    if (isMonthAfterButtonUnavailable) return;
    setDate((prevState) => prevState.add(1, 'month'));
  }

  return (
    <div className={styles.calendarHeaderWrapper}>
      <CalendarHeaderButton isUnavailable={isYearBeforeButtonUnavailable} onClick={handleYearBeforeButtonClick}>
        {'<<'}
      </CalendarHeaderButton>
      <CalendarHeaderButton isUnavailable={isMonthBeforeButtonUnavailable} onClick={handleMonthBeforeButtonClick}>
        {'<'}
      </CalendarHeaderButton>
      <button className={styles.calendarHeaderTitleButton} type='button' onClick={handleOpenMonthChange}>
        {dayjs(date).format('MMMM YYYY')}
      </button>
      <CalendarHeaderButton isUnavailable={isMonthAfterButtonUnavailable} onClick={handleMonthAfterButtonClick}>
        {'>'}
      </CalendarHeaderButton>
      <CalendarHeaderButton isUnavailable={isYearAfterButtonUnavailable} onClick={handleYearAfterButtonClick}>
        {'>>'}
      </CalendarHeaderButton>
    </div>
  );
};

export default CalendarHeader;
