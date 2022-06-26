import { useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { Dayjs } from 'dayjs';
import cx from 'classnames';

import { ISong } from 'types/musics';

import styles from './calendarBody.module.scss';
import { Tooltip } from 'components';

interface IProps {
  date: Dayjs;
  songOfTheDay?: ISong;
  ifOtherMonth?: boolean;
}

const CalendarDateButton = ({ date, songOfTheDay, ifOtherMonth }: IProps) => {
  const buttonRef = useRef(null);
  const isHovering = useHoverDirty(buttonRef);
  const tooltipString = songOfTheDay ? `${songOfTheDay.date}\n${songOfTheDay.title}` : '';

  const handleButtonClick = () => {
    console.log(songOfTheDay?.title);
  };

  return (
    <li className={styles.calendarButtonWrapper} ref={buttonRef}>
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
      {songOfTheDay && <Tooltip tooltipString={tooltipString} position='topMiddle' isShown={isHovering} />}
    </li>
  );
};

export default CalendarDateButton;
