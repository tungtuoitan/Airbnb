import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import { calculateTotalNights } from "../function/calculateTotalNight";

export default function TextAirbnbService() {
  const currentHome = useGetCurrentHome();
  const totalNights = calculateTotalNights();
  const totalFee = currentHome.priceOneNight * totalNights;
  return (
    <p className="flex justify-between">
      <span>Airbnbn service fee</span>

      <span>
        <span>$</span>
        <span>{totalFee / 10}</span>
      </span>
    </p>
  );
}
