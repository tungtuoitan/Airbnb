import { useDispatch } from "react-redux";
import { actionChangeWhere } from "../../actions/action";
import { actionClickWhen } from "../../actions/action";
import DestinationImg from "./destinationImg";

export default function DestinationItem({ imgSrc, name }) {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(actionChangeWhere(name));
    dispatch(actionClickWhen());
  };

  return (
    <div
      className={`inline-flex flex-col gap-2 items-start w-full h-full 
    flex-0-0-auto scroll-snap-align-start
    `}
      onClick={handleOnClick}
    >
      <DestinationImg imgSrc={imgSrc} name={name} />
      <p className="text-sm font-medium color222">{name}</p>
    </div>
  );
}
