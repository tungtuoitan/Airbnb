 

export const filterWithBathrooms = (filter, list) => {
    let hlByBathrooms = [];

    for (let i = 0; i < list.length; i++) {
      if (filter.amountBathrooms === "Any") {
        hlByBathrooms = [...list];
      } else if (
        filter.amountBathrooms === "8+" &&
        list[i].bathrooms === 8
      ) {
        hlByBathrooms.push(list[i]);
      } else if (list[i].bathrooms >= Number(filter.amountBathrooms)) {
        hlByBathrooms.push(list[i]);
      }
    }
    return hlByBathrooms
}
 