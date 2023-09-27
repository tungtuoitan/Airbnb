

export const filterWithBeds = (filter, list) => {
    let hlByBeds = [];
  for (let i = 0; i < list.length; i++) {
    if (filter.amountBeds === "Any") {
      hlByBeds = [...list];
    } else if (filter.amountBeds === "8+" && list[i].beds === 8) {
      hlByBeds.push(list[i]);
    } else if (list[i].beds >= Number(filter.amountBeds)) {
      hlByBeds.push(list[i]);
    }
  }
  return hlByBeds
}
 