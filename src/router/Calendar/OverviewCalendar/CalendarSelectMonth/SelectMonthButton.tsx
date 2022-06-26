import { MouseEventHandler } from 'react';

import styles from './calendarSelectMonth.module.scss';

interface IProps {
  value: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SelectMonthButton = ({ value, onClick }: IProps) => {
  return (
    <button className={styles.selectMonthButton} type='button' onClick={onClick}>
      {value}월
    </button>
  );
};

export default SelectMonthButton;
