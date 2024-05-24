import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import { calculateTotalNights } from "../function/calculateTotalNight";

export default function TextDiscount() {
  const currentHome = useGetCurrentHome();
  const totalNights = calculateTotalNights();
  const totalFee = currentHome.priceOneNight * totalNights;
  return (
    <p className="flex justify-between pb-c12">
      <span className="text-left">Discount by owner</span>

      <span className="text-green-700">
        <span>-$</span>
        <span>{parseInt((totalFee / 10) * 1.3)}</span>
      </span>
    </p>
  );
}
