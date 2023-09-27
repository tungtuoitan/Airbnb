import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalNights } from "../function/calculateTotalNight";

export default function TotalFeeByXNight2() {
  const currentHome = useGetCurrentHome();
  const totalNights = calculateTotalNights();
  const totalFee = currentHome.priceOneNight * totalNights;
  return (
        <div className="flex justify-between pb-c4 text-light  ">
          <span className="text-light">
            ${currentHome.priceOneNight} x {totalNights} nights
          </span>
          <span>
            <span>$</span>
            <span>{totalFee}</span>
          </span>
        </div>
  );
}
