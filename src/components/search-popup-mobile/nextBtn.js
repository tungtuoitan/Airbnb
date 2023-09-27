import { actionClickWho } from "../../actions/action";
import { useDispatch } from "react-redux";

export default function NextBtn() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(actionClickWho());
  };

  return (
    <button
      className="  bg-222 px-6 h-12 rounded-lg  flex justify-center 
      items-center"
    >
      <span
        className="  flex justify-center items-center gap-c10"
        onClick={handleOnClick}
      >
        <span className="text-white font-bold ">Next</span>
      </span>
    </button>
  );
}
