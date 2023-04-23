import { Dayjs } from 'dayjs';

import { useFetchMonthlySongsByDay } from 'hooks';
import { SongType } from 'types/musics';
import { getDateArray } from './getDateArray';
import CalendarDateElement from './CalendarDateElement';

import styles from './calendarBody.module.scss';

interface Props {
  date: Dayjs;
}

const CalendarBody = ({ date }: Props) => {
  const year = date.year().toString().padStart(2, '0');
  const month = (date.month() + 1).toString().padStart(2, '0');
  const { lastMonthArr, thisMonthArr, nextMonthArr, numOfDate } = getDateArray(date);
  const allSongsByDay = useFetchMonthlySongsByDay(month, year);

  function getSongOfDay(v: Dayjs): SongType {
    return allSongsByDay[v.format('YYYY-MM-DD')];
  }

  return (
    <ul className={styles.calendarBodyWrapper} style={{ gridTemplateRows: `repeat(${numOfDate / 7}, 1fr)` }}>
      {lastMonthArr.map((v) => (
        <CalendarDateElement key={`calendar-${v}`} date={v} songOfTheDay={getSongOfDay(v)} ifOtherMonth />
      ))}
      {thisMonthArr.map((v) => (
        <CalendarDateElement key={`calendar-${v}`} date={v} songOfTheDay={getSongOfDay(v)} />
      ))}
      {nextMonthArr.map((v) => (
        <CalendarDateElement key={`calendar-${v}`} date={v} songOfTheDay={getSongOfDay(v)} ifOtherMonth />
      ))}
    </ul>
  );
};

export default CalendarBody;
