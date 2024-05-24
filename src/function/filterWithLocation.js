
export const filterWithLocation = (filter, list) => {
  let hlByLocation = [...list];
  var totalTrue = 0;
  for (let i = 0; i < filter.amenities.location.length; i++) {
    let fakeX = [2, 0, 3, 1, 0, 0, 1, 2, 1, 1, 0, 0, 0];
    if (filter.amenities.location[i]) {
      totalTrue += fakeX[i];
    }
  }
  if (hlByLocation.length >= totalTrue) {
    hlByLocation = hlByLocation.slice(0, hlByLocation.length - totalTrue);
  } else {
    hlByLocation = [];
  }
  return hlByLocation;
};
