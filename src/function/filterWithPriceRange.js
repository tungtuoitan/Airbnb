export const filterWithPriceRange = (filter, list) => {
  const hlByPrice = [];
  for (let i = 0; i < list.length; i++) {
    if (
      list[i].priceOneNight >= filter.leftPrice &&
      list[i].priceOneNight <= filter.rightPrice
    ) {
      hlByPrice.push(list[i]);
    }
  }
  return hlByPrice;
};
