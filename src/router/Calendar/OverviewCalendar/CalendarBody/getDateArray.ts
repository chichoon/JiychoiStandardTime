import { Dayjs } from 'dayjs';

function getLastMonthDateArray(today: Dayjs) {
  const lastMonthArr = [];
  const lastMonth = today.add(-1, 'month');
  const firstDay = today.startOf('month').day();
  const lastMonthLastDay = lastMonth.daysInMonth();

  for (let i = firstDay - 1; i >= 0; i -= 1) {
    lastMonthArr.push(lastMonth.date(lastMonthLastDay - i));
  }
  return lastMonthArr;
}

function getThisMonthDateArray(today: Dayjs) {
  const thisMonthArr = [];
  const thisMonthLastDay = today.daysInMonth();

  for (let i = 1; i <= thisMonthLastDay; i += 1) {
    thisMonthArr.push(today.date(i));
  }
  return thisMonthArr;
}

function getNextMonthDateArray(today: Dayjs) {
  const nextMonthArr = [];
  const nextMonth = today.add(1, 'month');
  const firstDay = today.startOf('month').day();
  const thisMonthLastDay = today.daysInMonth();
  const nextMonthDay = 7 - ((firstDay + thisMonthLastDay) % 7);

  if (nextMonthDay !== 7) {
    for (let i = 1; i <= nextMonthDay; i += 1) {
      nextMonthArr.push(nextMonth.date(i));
    }
  }

  return nextMonthArr;
}

export function getDateArray(today: Dayjs) {
  const lastMonthArr = getLastMonthDateArray(today);
  const thisMonthArr = getThisMonthDateArray(today);
  const nextMonthArr = getNextMonthDateArray(today);

  const numOfDate = lastMonthArr.length + thisMonthArr.length + nextMonthArr.length;
  return { lastMonthArr, thisMonthArr, nextMonthArr, numOfDate };
}
