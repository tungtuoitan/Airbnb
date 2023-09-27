import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import { calculateTotalNights } from "../function/calculateTotalNight";

export default function TextTotalBeforeTax() {
  const currentHome = useGetCurrentHome();
  const totalNights = calculateTotalNights();
  const totalFeeByXNight = currentHome.priceOneNight * totalNights;
  const discount = parseInt((totalFeeByXNight / 10) * 1.3);
  const airbnbFee = totalFeeByXNight / 10;
  const totalFeeBeforeTax = totalFeeByXNight - discount + airbnbFee;
  return (
    <p className="flex justify-between pb-c12 mt-4 pt-4
    border-t-c1 border-solid border-gray-300
    font-bold">
      <span className="text-left">Total before taxes</span>

      <span >
        <span>$</span>
        <span>{totalFeeBeforeTax}</span>
      </span>
    </p>
  );
}
