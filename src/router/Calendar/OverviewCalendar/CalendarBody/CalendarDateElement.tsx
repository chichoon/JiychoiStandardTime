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
  const isToday = today.isSame(date, 'day');

  return (
    <li className={styles.calendarButtonWrapper}>
      {songOfTheDay ? (
        <>
          <Link
            to={`/play/${songOfTheDay.index}`}
            className={cx(styles.dateWrapper, styles.songAvailable, { [styles.otherMonthDate]: ifOtherMonth })}
            ref={buttonRef}
          >
            <span className={cx({ [styles.today]: isToday })}>{date.date()}</span>
          </Link>
          <Tooltip tooltipString={tooltipString} position='topMiddle' isShown={isHovering} />
        </>
      ) : (
        <div className={cx(styles.dateWrapper, { [styles.otherMonthDate]: ifOtherMonth })}>
          <span className={cx({ [styles.today]: isToday })}>{date.date()}</span>
        </div>
      )}
    </li>
  );
};

export default CalendarDateElement;
