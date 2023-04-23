import { Dayjs } from 'dayjs';

function getLastMonthDateArray(today: Dayjs, firstDay: number) {
  const lastMonthArr = [];
  const lastMonth = today.add(-1, 'month');
  const lastMonthLastDay = lastMonth.daysInMonth();

  for (let i = firstDay - 1; i >= 0; i -= 1) {
    lastMonthArr.push(lastMonth.date(lastMonthLastDay - i));
  }
  return lastMonthArr;
}

function getThisMonthDateArray(today: Dayjs, thisMonthLastDay: number) {
  const thisMonthArr = [];

  for (let i = 1; i <= thisMonthLastDay; i += 1) {
    thisMonthArr.push(today.date(i));
  }
  return thisMonthArr;
}

function getNextMonthDateArray(today: Dayjs, firstDay: number, thisMonthLastDay: number) {
  const nextMonthArr = [];
  const nextMonth = today.add(1, 'month');
  const nextMonthDay = 7 - ((firstDay + thisMonthLastDay) % 7);

  if (nextMonthDay !== 7) {
    for (let i = 1; i <= nextMonthDay; i += 1) {
      nextMonthArr.push(nextMonth.date(i));
    }
  }

  return nextMonthArr;
}

export function getDateArray(today: Dayjs) {
  const firstDay = today.startOf('month').day();
  const thisMonthLastDay = today.daysInMonth();
  const lastMonthArr = getLastMonthDateArray(today, firstDay);
  const thisMonthArr = getThisMonthDateArray(today, thisMonthLastDay);
  const nextMonthArr = getNextMonthDateArray(today, firstDay, thisMonthLastDay);

  const numOfDate = lastMonthArr.length + thisMonthArr.length + nextMonthArr.length;
  return { lastMonthArr, thisMonthArr, nextMonthArr, numOfDate };
}
