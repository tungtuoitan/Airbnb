import { actionSearchPopUp } from "../../actions/action";
import useCreateList from "../../hooks/useCreateList";
import InSearchBtn from "./inSearchBtn";
import { useDispatch, useSelector } from "react-redux";

export default function ShowXPlace() {
  const dispatch = useDispatch();
  const currentHomeList = useCreateList().currentHomeList;
  const content =
    currentHomeList.length === 0
      ? "No exact matches"
      : `Show ${currentHomeList.length} place`;

  const handleSearch = () => {
    if (currentHomeList.length !== 0) {
      
    }
  };
  return (
    <button
      className=" bg-black222 ||  h-12 px-c24
      ||  flex justify-center items-center || rounded-lg "
    >
      <div
        className="flex  justify-center items-center 
      ||  text-white font-bold whitespace-nowrap "
      >
        <span>{content}</span>
      </div>
    </button>
  );
}
