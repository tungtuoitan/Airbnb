import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import { calculateTotalNights } from "../function/calculateTotalNight";



export const useCalculateTotalPriceIncludeTaxes = ()=>{
    const currentHome = useGetCurrentHome();
    const totalNights = calculateTotalNights();
    const totalFeeByXNight = currentHome.priceOneNight * totalNights;
    const discount = parseInt((totalFeeByXNight / 10) * 1.3);
    const airbnbFee = totalFeeByXNight / 10;
    const totalFeeBeforeTax = totalFeeByXNight - discount + airbnbFee;
    return (totalFeeBeforeTax*1.1).toFixed(2)
}