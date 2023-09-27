
export const filterWithBooking = (filter, list) => {
  let hlByBooking = [...list];
  var totalTrue = 0;
  if (filter.bookingOptions.instantBook) {
    totalTrue += 1;
  }
  if (filter.bookingOptions.selfCheckIn) {
    totalTrue += 2;
  }
  if (hlByBooking.length >= totalTrue) {
    hlByBooking = hlByBooking.slice(0, hlByBooking.length - totalTrue);
  } else {
    hlByBooking = [];
  }
  return hlByBooking
};
