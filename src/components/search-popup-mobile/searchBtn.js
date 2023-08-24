import { useDispatch } from "react-redux";
import { actionSearchPopUp } from "../../actions/action";
import InSearchBtn from "./inSearchBtn";
export default function () {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(actionSearchPopUp());
  };
  return (
    <button
      className="border1 main-gradient w-32 h-12 rounded-lg border1 flex justify-center 
      items-center"
    >
      <InSearchBtn/>
    </button>
  );
}
