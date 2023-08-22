var today = new Date();
let year0 = today.getFullYear();
let month0 = today.getMonth();

let get5ArrOfMonth = (y, m) => {
  let dateOfMonth = Array.from({ length: 42 }, () => ".");
  let Day1Index = new Date(y, m, 1).getDay();
  dateOfMonth[Day1Index] = 1;
  for (let i = Day1Index; i < 42; i++) {
    dateOfMonth[i] = i - (Day1Index - 1);
    if (dateOfMonth[i] > 31) {
      dateOfMonth[i] = ".";
    }
  }

  return [
    dateOfMonth.slice(0, 7),
    dateOfMonth.slice(7, 14),
    dateOfMonth.slice(14, 21),
    dateOfMonth.slice(21, 28),
    dateOfMonth.slice(28, 35),
    dateOfMonth.slice(35, 42),
  ];
};
const time = {
  today: {
    date: today.getDate(),
    month: month0,
    year: year0,
  },
  get5ArrOfMonth: get5ArrOfMonth,
};
var today = time.today;
export { time, today };
