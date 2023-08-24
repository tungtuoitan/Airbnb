import { useDispatch, useSelector } from "react-redux";
import { actionPickLocation, actionClickWhen } from "../../actions/action";
import Icon6 from "../icon6";

export default function DestinationItem2() {
  const fiveCitiesArr = useSelector((state) => state.root.fiveCitiesArr);
  const dispatch = useDispatch();
  const handleOnClick = (item) => {
    dispatch(actionPickLocation(item));
    // dispatch(actionClickWhen())
  };
  return (
    <ul className="">
      {fiveCitiesArr.map((item, index) => {
        return (
          <li
            key={index}
            className="flex justify-start flex items-center gap-4 
          mb-4"
            onClick={() => {
              handleOnClick(item);
            }}
          >
            <div
              className="bg-gray235 w-12 h-12 rounded-xl flex justify-center items-center
            "
            >
              <Icon6 />
            </div>
            <p className="text-left color222">{item}</p>
          </li>
        );
      })}
    </ul>
  );
}
