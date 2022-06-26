import { Dayjs } from 'dayjs';

import { getMonthArray } from 'utils/calendarUtils';

import styles from './calendarBody.module.scss';
import { ISong, ISongsByDay } from 'types/musics';
import CalendarDateElement from './CalendarDateElement';

const TEST_DATA: ISongsByDay = {
  '2022-05-29': {
    index: 0,
    title: '맞은편 미래',
    artist: 'achime',
    comment: '좋은achime입니다 🌄',
    id: '3oBPGdOwbbc',
    date: '2021-08-30 07:10',
    tagList: ['peaceful', 'man', 'band'],
  },
};

interface IProps {
  date: Dayjs;
}

const CalendarBody = ({ date }: IProps) => {
  const monthArray = getMonthArray(date);

  const getSongOfDay = (v: Dayjs): ISong | undefined => {
    return TEST_DATA[v.format('YYYY-MM-DD')] ?? undefined;
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