import { Dayjs } from 'dayjs';

interface IMonthArray {
  lastMonthArr: Array<number>;
  thisMonthArr: Array<number>;
  nextMonthArr: Array<number>;
  numOfDate: number;
}

export const getMonthArray = (date: Dayjs) => {
  const lastMonthLastDay = date.add(-1, 'month').daysInMonth();
  const firstDay = date.startOf('month').day();
  const thisMonthLastDay = date.daysInMonth();
  const nextMonthDay = 7 - ((firstDay + thisMonthLastDay) % 7);
  const monthArray: IMonthArray = {
    lastMonthArr: [],
    thisMonthArr: [],
    nextMonthArr: [],
    numOfDate: 0,
  };

  for (let i = firstDay - 1; i >= 0; i -= 1) monthArray.lastMonthArr.push(lastMonthLastDay - i);
  for (let i = 1; i <= thisMonthLastDay; i += 1) monthArray.thisMonthArr.push(i);
  if (nextMonthDay !== 7) for (let i = 1; i <= nextMonthDay; i += 1) monthArray.nextMonthArr.push(i);
  monthArray.numOfDate =
    monthArray.lastMonthArr.length + monthArray.thisMonthArr.length + monthArray.nextMonthArr.length;
  return monthArray;
};
