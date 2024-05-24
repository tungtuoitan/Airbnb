export const filterWidthTypePlace = (filter, homeList) => {
  let hlByPlaceType = [];

  if (filter.placeType === "Any type") {
    hlByPlaceType = [...homeList];
  } else {
    for (let i = 0; i < homeList.length; i++) {
      if (homeList[i].placeType === filter.placeType) {
        hlByPlaceType.push(homeList[i]);
      }
    }
  }
  return hlByPlaceType;
};
