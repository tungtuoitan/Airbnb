import TextAirbnbService from "./textAirbnbService";
import TextDiscount from "./textDiscount";
import TextTotalBeforeTax from "./textTotalBeforeTax";
import TextYouWont from "./textYouWont";
import TotalFeeByXNight from "./totalFeeByXNight";

export default function FinalPriceCalculate() {
  return (
    <div className="text-left text-c15 text-black222 font-medium w-full pb-4">
      <TextYouWont />
      <TotalFeeByXNight />
      <TextDiscount/>
      <TextAirbnbService/>
      <TextTotalBeforeTax/>
    </div>
  );
}
