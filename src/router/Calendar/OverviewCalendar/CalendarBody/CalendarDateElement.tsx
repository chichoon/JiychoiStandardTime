import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHoverDirty } from 'react-use';
import dayjs, { Dayjs } from 'dayjs';
import cx from 'classnames';

import { ISong } from 'types/musics';
import { Tooltip } from 'components';

import styles from './calendarBody.module.scss';

interface IProps {
  date: Dayjs;
  songOfTheDay?: ISong;
  ifOtherMonth?: boolean;
}

const today = dayjs();

const CalendarDateElement = ({ date, songOfTheDay, ifOtherMonth }: IProps) => {
  const buttonRef = useRef(null);
  const isHovering = useHoverDirty(buttonRef);
  const tooltipString = songOfTheDay ? `${songOfTheDay.date}\n${songOfTheDay.title}` : '';

  return (
    <li className={styles.calendarButtonWrapper}>
      {songOfTheDay ? (
        <>
          <Link
            to={`/play/${songOfTheDay.index}`}
            className={cx(styles.dateWrapper, styles.songAvailable, { [styles.otherMonthDate]: ifOtherMonth })}
            ref={buttonRef}
          >
            {date.date()}
            {today.isSame(date) && <div className={styles.today}>오늘</div>}
          </Link>
          <Tooltip tooltipString={tooltipString} position='topMiddle' isShown={isHovering} />
        </>
      ) : (
        <div className={cx(styles.dateWrapper, { [styles.otherMonthDate]: ifOtherMonth })}>
          {date.date()}
          {today.isSame(date, 'day') && <div className={styles.today}>오늘</div>}
        </div>
      )}
    </li>
  );
};

export default CalendarDateElement;
