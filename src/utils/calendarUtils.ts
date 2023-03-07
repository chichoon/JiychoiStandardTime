import { Dayjs } from 'dayjs';

interface IMonthArray {
  lastMonthArr: Array<Dayjs>;
  thisMonthArr: Array<Dayjs>;
  nextMonthArr: Array<Dayjs>;
  numOfDate: number;
}

export function getMonthArray(date: Dayjs) {
  const lastMonth = date.add(-1, 'month');
  const nextMonth = date.add(1, 'month');
  const lastMonthLastDay = lastMonth.daysInMonth();
  const firstDay = date.startOf('month').day();
  const thisMonthLastDay = date.daysInMonth();
  const nextMonthDay = 7 - ((firstDay + thisMonthLastDay) % 7);
  const monthArray: IMonthArray = {
    lastMonthArr: [],
    thisMonthArr: [],
    nextMonthArr: [],
    numOfDate: 0,
  };

  for (let i = firstDay - 1; i >= 0; i -= 1) monthArray.lastMonthArr.push(lastMonth.date(lastMonthLastDay - i));
  for (let i = 1; i <= thisMonthLastDay; i += 1) monthArray.thisMonthArr.push(date.date(i));
  if (nextMonthDay !== 7) for (let i = 1; i <= nextMonthDay; i += 1) monthArray.nextMonthArr.push(nextMonth.date(i));
  monthArray.numOfDate =
    monthArray.lastMonthArr.length + monthArray.thisMonthArr.length + monthArray.nextMonthArr.length;
  return monthArray;
}
