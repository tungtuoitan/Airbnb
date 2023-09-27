import { useSelector } from "react-redux";
import TextAirbnbService from "./textAirbnbService";
import TextAirbnbService2 from "./textAirbnbService2";
import TextDiscount from "./textDiscount";
import TextDiscount2 from "./textDiscount2";
import TextTotalBeforeTax from "./textTotalBeforeTax";
import TextTotalBeforeTax2 from "./textTotalBeforeTax2";
import TextYouWont from "./textYouWont";
import TotalFeeByXNight from "./totalFeeByXNight";
import TotalFeeByXNight2 from "./totalFeeByXNight2";

export default function FinalPrice() {
  const firstDate = useSelector((s) => s.dateItemSlice.firstDate);
  const lastDate = useSelector((s) => s.dateItemSlice.lastDate);

  return (
    <div className="text-left text-sm text-black222  w-full pb-4 mt-2">
      <p className="text-left text-black22 font-bold text-c18 mb-c6">
        Price details
      </p>
      {firstDate.length !== 0 && lastDate.length !==0 ? ( // k có điều kiện này thì sẽ gây ra lỗi
        <>
          <TotalFeeByXNight2 />
          <TextDiscount2 />
          <TextAirbnbService2 />
          <TextTotalBeforeTax2 />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
