

export const filterWithBedrooms = (filter, list) => {
    let hlByBedrooms = [];

  for (let i = 0; i < list.length; i++) {
    if (filter.amountBedrooms === "Any") {
      hlByBedrooms = [...list];
    } else if (filter.amountBedrooms === "8+" && list[i].bedrooms === 8) {
      hlByBedrooms.push(list[i]);
    } else if (list[i].bedrooms >= Number(filter.amountBedrooms)) {
      hlByBedrooms.push(list[i]);
    }
  }
  return hlByBedrooms
}
 