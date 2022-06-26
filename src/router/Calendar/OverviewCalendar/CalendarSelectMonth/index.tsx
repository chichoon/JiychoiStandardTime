import { Dispatch, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';

import styles from './calendarSelectMonth.module.scss';
import SelectMonthButton from './SelectMonthButton';

interface IProps {
  setDate: Dispatch<SetStateAction<Dayjs>>;
  setIsSelectMonthOpen: Dispatch<SetStateAction<boolean>>;
}

const CalendarSelectMonth = ({ setDate, setIsSelectMonthOpen }: IProps) => {
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleSelectMonthButtonClick = (month: number) => {
    setDate((prevState) => prevState.month(month - 1));
    setIsSelectMonthOpen(false);
  };

  return (
    <div className={styles.selectMonthWrapper}>
      {monthList.map((v) => (
        <SelectMonthButton key={`select-month-${v}`} value={v} onClick={() => handleSelectMonthButtonClick(v)} />
      ))}
    </div>
  );
};

export default CalendarSelectMonth;
