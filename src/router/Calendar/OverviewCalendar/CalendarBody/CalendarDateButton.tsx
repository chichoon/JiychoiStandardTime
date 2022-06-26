import cx from 'classnames';
import { Dayjs } from 'dayjs';

import { ISong } from 'types/musics';

import styles from './calendarBody.module.scss';

interface IProps {
  date: Dayjs;
  songOfTheDay?: ISong;
  ifOtherMonth?: boolean;
}

const CalendarDateButton = ({ date, songOfTheDay, ifOtherMonth }: IProps) => {
  const handleButtonClick = () => {
    console.log(songOfTheDay?.title);
  };

  return (
    <li>
      {songOfTheDay ? (
        <button
          type='button'
          onClick={handleButtonClick}
          className={cx(styles.dateWrapper, { [styles.otherMonthDate]: ifOtherMonth })}
        >
          {date.date()}
          <div className={styles.songAvailable} />
        </button>
      ) : (
        <div className={cx(styles.dateWrapper, { [styles.otherMonthDate]: ifOtherMonth })}>{date.date()}</div>
      )}
    </li>
  );
};

export default CalendarDateButton;
