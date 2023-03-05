import { Dayjs } from 'dayjs';

import { SongByDayType, SongType } from 'types/musics';
import { getMonthArray } from 'utils/calendarUtils';
import CalendarDateElement from './CalendarDateElement';

import styles from './calendarBody.module.scss';

interface IProps {
  date: Dayjs;
}

const CalendarBody = ({ date }: IProps) => {
  const monthArray = getMonthArray(date);
  const allSongsByDay: SongByDayType = {};

  const getSongOfDay = (v: Dayjs): SongType | undefined => {
    return allSongsByDay[v.format('YYYY-MM-DD')] ?? undefined;
  };

  return (
    <ul className={styles.calendarBodyWrapper} style={{ gridTemplateRows: `repeat(${monthArray.numOfDate / 7}, 1fr)` }}>
      {monthArray.lastMonthArr.map((v) => (
        <CalendarDateElement key={`calendar-${v}`} date={v} songOfTheDay={getSongOfDay(v)} ifOtherMonth />
      ))}
      {monthArray.thisMonthArr.map((v) => (
        <CalendarDateElement key={`calendar-${v}`} date={v} songOfTheDay={getSongOfDay(v)} />
      ))}
      {monthArray.nextMonthArr.map((v) => (
        <CalendarDateElement key={`calendar-${v}`} date={v} songOfTheDay={getSongOfDay(v)} ifOtherMonth />
      ))}
    </ul>
  );
};

export default CalendarBody;
