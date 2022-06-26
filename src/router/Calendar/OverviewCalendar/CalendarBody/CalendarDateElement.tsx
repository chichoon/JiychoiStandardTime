import { useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { Dayjs } from 'dayjs';
import cx from 'classnames';

import { ISong } from 'types/musics';

import styles from './calendarBody.module.scss';
import { Tooltip } from 'components';
import { Link } from 'react-router-dom';

interface IProps {
  date: Dayjs;
  songOfTheDay?: ISong;
  ifOtherMonth?: boolean;
}

const CalendarDateElement = ({ date, songOfTheDay, ifOtherMonth }: IProps) => {
  const buttonRef = useRef(null);
  const isHovering = useHoverDirty(buttonRef);
  const tooltipString = songOfTheDay ? `${songOfTheDay.date}\n${songOfTheDay.title}` : '';

  return (
    <li className={styles.calendarButtonWrapper} ref={buttonRef}>
      {songOfTheDay ? (
        <Link
          to={`/play/${songOfTheDay.index}`}
          className={cx(styles.dateWrapper, { [styles.otherMonthDate]: ifOtherMonth })}
        >
          {date.date()}
          <div className={styles.songAvailable} />
        </Link>
      ) : (
        <div className={cx(styles.dateWrapper, { [styles.otherMonthDate]: ifOtherMonth })}>{date.date()}</div>
      )}
      {songOfTheDay && <Tooltip tooltipString={tooltipString} position='topMiddle' isShown={isHovering} />}
    </li>
  );
};

export default CalendarDateElement;
