import useCreateHomeAmount from "./useCreateHomeAmount";

export default function useCreateBiggestAmount() {
    const homeAmountByPrice = useCreateHomeAmount()
    let biggestAmount = 0;
    for (let i = 0; i < homeAmountByPrice.length; i++) {
      if (homeAmountByPrice[i] > biggestAmount) {
        biggestAmount = homeAmountByPrice[i];
      }
    }
    return biggestAmount;
  }