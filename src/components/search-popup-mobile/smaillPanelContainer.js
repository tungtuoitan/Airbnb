import SmallPanel from "./small-panel";
import { useDispatch, useSelector } from "react-redux";
import { actionClickWhen } from "../../actions/action";
import fakeData from "../../datas/fake-data";

export default function () {
  
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(actionClickWhen());
  };
  const firstDate = useSelector((state) => state.dateItemSlice.firstDate);
  const lastDate = useSelector((state) => state.dateItemSlice.lastDate);

  const whenText =
    firstDate.length === 0 || lastDate.length === 0
      ? `Add Dates`
      : `${fakeData.dateInString[firstDate[0] - 1]}.${
          fakeData.monthShortNames[firstDate[1]]
        } - ${fakeData.dateInString[lastDate[0] - 1]}.${
          fakeData.monthShortNames[lastDate[1]]
        }`;
  return (
    <>
      <SmallPanel
        content={"When"}
        value={whenText}
        handleOnClick={handleOnClick}
      />
    </>
  );
}
