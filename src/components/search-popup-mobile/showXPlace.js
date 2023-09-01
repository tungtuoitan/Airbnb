import { actionSearchPopUp } from "../../actions/action";
import InSearchBtn from "./inSearchBtn";
import { useDispatch,useSelector } from "react-redux";


export default function ShowXPlace() {
  const dispatch = useDispatch();
  const currentHomeList = useSelector(state=>state.filterSlice.currentHomeList)
  const amountCurrentHome = currentHomeList.length ;

  const handleSearch = () => {
    dispatch(actionSearchPopUp());
  };
  return (
    <button
      className=" bg-black222 ||  h-12 px-c24
      ||  flex justify-center items-center || rounded-lg "
    >
      <div className="flex  justify-center items-center 
      ||  text-white font-bold whitespace-nowrap ">
        <span>Show {amountCurrentHome} places</span>
      </div>
    </button>
  );
}
