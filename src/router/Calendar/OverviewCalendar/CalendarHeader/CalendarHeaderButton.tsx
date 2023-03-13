import { ReactNode } from 'react';
import cx from 'classnames';

import styles from './calendarHeader.module.scss';

interface Props {
  children: ReactNode;
  isUnavailable: boolean;
  onClick: () => void;
}

export const CalendarHeaderButton = ({ children, isUnavailable, onClick }: Props) => {
  return (
    <button
      className={cx(styles.calendarHeaderButton, { [styles.calendarHeaderButtonUnavailable]: isUnavailable })}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
};
