import { useDispatch, useSelector } from "react-redux";
import { actionPickLocation, actionClickWhen } from "../../actions/action";
import { setCurrentPopUp } from "../../reducer/searchSlice";
import { whereToInputChange } from "../../actions/action";
import { actionChangeWhere } from "../../actions/action";
import Icon6 from "../icon6";

export default function DestinationItemsByKeyword() {
  const fiveCitiesArr = useSelector((state) => state.root.fiveCitiesArr);
  const dispatch = useDispatch();
  const handleOnClick = (item) => {
    dispatch(actionPickLocation(item));
    dispatch(setCurrentPopUp('when'))
    dispatch (whereToInputChange(item))
  };

  return (
    <div className="col-start-1 col-end-5">
      <p className="text-sm font-bold text-black22 text-left mb-4">
        Search by typing
      </p>
      <ul className="">
        {fiveCitiesArr.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-start flex items-center gap-4 cursor-pointer
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
    </div>
  );
}
