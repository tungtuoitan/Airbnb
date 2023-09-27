import TitleWhoComing from "./titleWhoComing";
import AdultsComming from "./adultsComing";
import ChildrenComming from "./childrenComing";
import InfantsComing from "./infantsComing";
import PetsComing from "./petsComing";
import { useDispatch } from "react-redux";
import { setIsFirstTimeOfWho } from "../../reducer/searchSlice";

export default function Who2() {
  const dispatch = useDispatch()
  const handleOnClick = ()=>{
    dispatch(setIsFirstTimeOfWho(false))
  }
  return (
    <div className="relative overflow-hidden w-full bg-white py-6 px-1"
    onClick={handleOnClick}>
        <AdultsComming />
        <ChildrenComming />
        <InfantsComing />
        <PetsComing />
    </div>
  );
}
