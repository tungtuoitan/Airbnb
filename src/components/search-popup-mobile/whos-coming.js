import SmallPanel from "./small-panel";
import WhoComingItem from "./whocoming-item";
import { useSelector, useDispatch } from "react-redux";
import {
  actionClickWhen,
  actionClickWho,
  actionClickWhere,
} from "../../actions/action";
import {
  increaseAdults,
  decreaseAdults,
  increaseChildrens,
  decreaseChildrens,
  increaseInfants,
  decreaseInfants,
  increasePets,
  decreasePets,
} from "../../reducer/whoComingSlice";



export default function () {
  const isWhosComingOpen = useSelector((state) => state.root.isWhosComingOpen);
  const who = useSelector((state) => state.whoComing.who);
  const adults = useSelector((state) => state.whoComing.adults);
  const children = useSelector((state) => state.whoComing.children);
  const infants = useSelector((state) => state.whoComing.infants);
  const pets = useSelector((state) => state.whoComing.pets);

  const dispatch = useDispatch();
  const handleOnClick = () => dispatch(actionClickWho());

  return isWhosComingOpen === true ? (
    <div className="WHO_COMING  relative overflow-hidden w-full bg-white p-6 pb-c10 rounded-3xl box-shadow-whereto">
      <div className="font-size22 color222 font-bold text-left mb-0">
        Who's coming?
      </div>
      <div>
        <WhoComingItem
          item={adults}
          haveBottomLine={true}
          handleDecrease={() => dispatch(decreaseAdults())}
          handleIncrease={() => dispatch(increaseAdults())}
        />
        <WhoComingItem
          item={children}
          haveBottomLine={true}
          handleDecrease={() => dispatch(decreaseChildrens())}
          handleIncrease={() => dispatch(increaseChildrens())}
        />
        <WhoComingItem
          item={infants}
          haveBottomLine={true}
          handleDecrease={() => dispatch(decreaseInfants())}
          handleIncrease={() => dispatch(increaseInfants())}
        />
        <WhoComingItem
          item={pets}
          haveBottomLine={false}
          handleDecrease={() => dispatch(decreasePets())}
          handleIncrease={() => dispatch(increasePets())}
        />
      </div>
    </div>
  ) : (
    <SmallPanel content={"Who"} value={who} handleOnClick={handleOnClick} />
  );  
}
