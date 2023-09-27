import SmallPanel from "./small-panel";
import { useSelector, useDispatch } from "react-redux";
import { actionClickWho } from "../../actions/action";
import WhoPopUps from "./whoPopups";

export default function () {
  const isWhosComingOpen = useSelector((state) => state.root.isWhosComingOpen);
  const who = useSelector((state) => state.whoComing.who);
  const dispatch = useDispatch();
  const handleOnClick = () => dispatch(actionClickWho());

  return isWhosComingOpen === true ? (
    <WhoPopUps />
  ) : (
    <SmallPanel content={"Who"} value={who} handleOnClick={handleOnClick} />
  );
}
