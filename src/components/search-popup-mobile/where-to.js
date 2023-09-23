import { useSelector, useDispatch } from "react-redux";
import SmallPanel from "./small-panel";
import {
  actionClickWhere,
} from "../../actions/action";

import TypingSearchPopup from "./typing-search-popup";
import InputWhereTo from "./input-where-to";
import WhereToTitle from "./whereToTitle";
import DestinationItemContainer from "./destinationItemContainer";
import { DivBonus3 } from "./divBonus3";

export default function WhereTo() {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(actionClickWhere());
  };
  
  const where = useSelector((state) => state.root.where);
  const isWhereToOpen = useSelector((state) => state.root.isWhereToOpen);
 

  return isWhereToOpen ? (
     <div className="WHERE_TO  relative overflow-hidden w-full bg-white p-6 rounded-3xl box-shadow-whereto">
      <WhereToTitle />
      <DivBonus3 />
      <InputWhereTo  />
      <DestinationItemContainer />
      <TypingSearchPopup />
    </div>
  ) : (
    <SmallPanel content={"Where"} value={where} handleOnClick={handleOnClick} />
  );
}
