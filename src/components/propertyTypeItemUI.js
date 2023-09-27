import { useDispatch, useSelector } from "react-redux";

export default function PropertyTypeItemUI(props) {
  const { handleOnClick, handleOnMouseDown, handleOnMouseUp, isMouseDown,icon,name } =
    props;
  const propertyType = useSelector(
    (state) => state.filterSlice.filter.propertyType
  );
  return (
    <div
      className="flex justify-center items-center
      w-full h-c100 7:h-c120 cursor-pointer"
    >
      <div
        className={`p-4 rounded-xl transition-all
          || flex flex-col justify-between 7:gap-4  box-border 
          ${
            propertyType === name
              ? "bg-white1 border-c2 border-black222"
              : "bg-white border-c1 border-gray-300 border-solid hover:border-black"
          }
          ${isMouseDown ? "w-11/12 h-4/5" : "w-full h-full"}
          
          `}
        onClick={handleOnClick}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
        onTouchStart={handleOnMouseDown}
        onTouchEnd={handleOnMouseUp}
      >
        {icon}
        <span className="text-left text-black222 font-bold">{name}</span>
      </div>
    </div>
  );
}
