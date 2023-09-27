export default function getMonthAndYear2(currentMonth) {
  let month2, year2;
  if (currentMonth.month === 11) {
    month2 = 0;
    year2 = currentMonth.year + 1;
  } else  {
    month2 = currentMonth.month + 1;
    year2 = currentMonth.year;
  }
  return { month2, year2 };
}
