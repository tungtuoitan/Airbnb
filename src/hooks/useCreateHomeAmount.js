import useCreateList from "./useCreateList";

export default function useCreateHomeAmount() {
  const list = useCreateList().homeListByTypePlace;
  const homeAmount = Array.from({ length: 50 }, () => 0);
  for (let i = 0; i < list.length; i++) {
    const indexPrice = list[i].priceOneNight / 5;
    homeAmount[indexPrice - 1] += 1; // trừ 1 là vì indexPrice luôn lớn hơn 0,
  }
  return homeAmount;
}
