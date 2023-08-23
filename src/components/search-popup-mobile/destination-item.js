import { useDispatch, useSelector } from "react-redux";
import { actionChangeWhere } from "../../actions/action";
import { actionClickWhen } from "../../actions/action";
export default function DestinationItem({ imgSrc, name }) {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(actionChangeWhere(name));
    dispatch(actionClickWhen());
  };
  const where = useSelector((state) => state.root.where);

  return (
    <div
      className={`inline-flex flex-col gap-2 items-start w-full h-full 
    flex-0-0-auto scroll-snap-align-start
    `}
      onClick={handleOnClick}
    >
      <img
        src={imgSrc}
        className={`w-c122 h-c122 rounded-lg
        ${
          where === name
            ? "border-2 border-solid border-gray-600"
            : "border-1 border-solid border-gray-300"
        } 
        `}
      />
      <p className="text-sm font-medium color222">{name}</p>
    </div>
  );
}
