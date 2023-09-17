import { useDispatch } from "react-redux";
import { actionChangeWhere } from "../../actions/action";
import { actionClickWhen } from "../../actions/action";
import DestinationImg from "./destinationImg";
import { setCurrentPopUp } from "../../reducer/searchSlice";
import { whereToInputChange } from "../../actions/action";

export default function DestinationItem2({ imgSrc, name }) {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(actionChangeWhere(name));
    dispatch(actionClickWhen());
    dispatch(setCurrentPopUp('when'))
    dispatch (whereToInputChange(name))
  };

  return (
    <div
      className={`inline-flex flex-col gap-2 items-start w-full h-full 
    flex-0-0-auto scroll-snap-align-start cursor-pointer
    `}
      onClick={handleOnClick}
    >
      <DestinationImg imgSrc={imgSrc} name={name} />
      <span className="text-sm font-medium color222">{name}</span>
    </div>
  );
}
