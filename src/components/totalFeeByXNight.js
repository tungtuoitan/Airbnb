import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalNights } from "../function/calculateTotalNight";

export default function TotalFeeByXNight() {
  const currentHome = useGetCurrentHome();
  const totalNights = calculateTotalNights();
  const totalFee = currentHome.priceOneNight * totalNights;
  return (
    <p className="flex justify-between pb-c12 ">
      <span>
        ${currentHome.priceOneNight} x {totalNights} nights
      </span>
      <span>
        <span>$</span>
        <span>{totalFee}</span>
      </span>
    </p>
  );
}
