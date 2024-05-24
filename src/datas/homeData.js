const random5 = () => {
  return Math.floor(Math.random() * 30);
};

//# tạo ra array chứa 50 khúc giá ,
const amountPriceType = [];
for (let i = 0; i <= 50; i++) {
  amountPriceType.push(i * 5);
}
//# tạo ra array chứa SỐ LƯỢNG HOME của mỗi khúc giá
const rateSoLuong = [1];
for (let i = 0; i < 50; i++) {
  let soluongChenhlech = Math.floor(Math.random() * 6) - 4;
  if (rateSoLuong[i] + soluongChenhlech > 0) {
    rateSoLuong.push(rateSoLuong[i] + soluongChenhlech);
  } else {
    rateSoLuong.push(rateSoLuong[i] );
  }
}
//# allPrice = loại giá * số lượng của loại giá
function pushX(amount, price) {
  for (let i = 0; i <= amount; i++) {
    allPriceRateAndAmount.push(price);
  }
}
//# array này có 655 item, gồm 80 khúc giá, và đã tính toán tỉ lệ giữa các khúc giá
const allPriceRateAndAmount = [];
for (let i = 0; i < amountPriceType.length; i++) {
  pushX(rateSoLuong[i], amountPriceType[i]);
}

const homeData = {
  name: [
    "Ruby House",
    "Emerald Residence",
    "Sapphire Villa",
    "Topaz Mansion",
    "Amethyst Home",
    "Opal Cottage",
    "Diamond Manor",
    "Garnet Lodge",
    "Jade Bungalow",
    "Quartz Palace",
    "Pearl Chalet",
    "Onyx Retreat",
    "Citrine Mansion",
    "Amber Villa",
    "Coral House",
    "Turquoise Residence",
    "Aquamarine Home",
    "Lapis Lazuli Cottage",
    "Peridot Manor",
    "Moonstone Lodge",
    "Tanzanite Bungalow",
    "Agate Palace",
    "Tourmaline Chalet",
    "Sunstone Retreat",
    "Malachite Mansion",
    "Bloodstone Villa",
    "Obsidian House",
    "Ametrine Residence",
    "Rhodonite Home",
    "Jasper Cottage",
    "Celestite Manor",
    "Azurite Lodge",
    "Zircon Bungalow",
    "Larimar Palace",
    "Carnelian Chalet",
    "Emerald House",
    "Sapphire Residence",
    "Ruby Villa",
    "Amethyst Mansion",
    "Opal Home",
    "Topaz Cottage",
    "Garnet Manor",
    "Jade Lodge",
    "Quartz Bungalow",
    "Pearl Palace",
    "Onyx Chalet",
    "Citrine Retreat",
    "Amber Mansion",
    "Turquoise Villa",
    "Coral House",
    "Aquamarine Residence",
    "Lapis Lazuli Home",
    "Peridot Cottage",
    "Moonstone Manor",
    "Tanzanite Lodge",
    "Agate Bungalow",
    "Tourmaline Palace",
    "Sunstone Chalet",
    "Malachite Retreat",
    "Bloodstone Mansion",
    "Obsidian Villa",
    "Ametrine House",
    "Rhodonite Residence",
    "Jasper Villa",
    "Celestite Mansion",
    "Azurite Home",
    "Zircon Cottage",
    "Larimar Manor",
    "Carnelian Lodge",
    "Emerald Bungalow",
    "Sapphire Palace",
    "Ruby Chalet",
    "Amethyst Retreat",
    "Opal Mansion",
    "Topaz Villa",
    "Garnet House",
    "Jade Residence",
    "Quartz Cottage",
    "Pearl Manor",
    "Onyx Lodge",
    "Citrine Bungalow",
    "Amber Palace",
    "Turquoise Chalet",
    "Coral Retreat",
    "Aquamarine Mansion",
    "Lapis Lazuli Villa",
    "Peridot House",
    "Moonstone Residence",
    "Tanzanite Cottage",
    "Agate Manor",
    "Tourmaline Lodge",
    "Sunstone Bungalow",
    "Malachite Palace",
    "Bloodstone Chalet",
    "Obsidian Retreat",
    "Ametrine Mansion",
    "Rhodonite Villa",
    "Jasper House",
    "Celestite Residence",
    "Azurite Cottage",
    "Zircon Manor",
    "Larimar Lodge",
    "Carnelian Bungalow",
  ],

  placeType: ["Room", "Entire home"],
  priceOneNight: allPriceRateAndAmount,

  bedrooms: [1, 2, 3, 4, 5, 6, 7, 8],
  beds: [1, 2, 3, 4, 5, 6, 7, 8],
  bathrooms: [1, 2, 3, 4, 5, 6, 7, 8],
  bath: [1, 2, 3, 4],
  propertyType: ["house", "apartment", "guesthouse", "hotel"],
  trueFalse: [true, false],

  status: ["Avalable", "Not avalable"],
  guests: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  checkInAfter: [12, 13, 14, 15, 16, 17, 18],
  checkOutBefore: [7, 8, 9, 10, 11, 12, 13],
};

export default homeData;
