import XCreaseBtn, { dPathIncreaseIcon, dPathDecreaseIcon } from "./xCreaseBtn";
import {  useSelector } from "react-redux";

export default function WhoComingItem({ item,handleDecrease,handleIncrease,  haveBottomLine }) {

  const childrenAmount = useSelector(state=>state.whoComing.children.amount)
  const infantsAmount = useSelector(state=>state.whoComing.infants.amount)
  const petsAmount = useSelector(state=>state.whoComing.pets.amount)

  return (
    <div
      className={`WHOCOMING_ITEM    flex justify-between items-center py-c14 
         ${
           haveBottomLine === true
             ? "border-b-1 border-solid border-gray-200"
             : ""
         }`}
    >
      <div className="LEFT   ">
        <p className="text-base color222 font-bold text-left">{item.type}</p>
        <p className="text-sm color-gray7 font-medium text-left mt-c2">{item.note}</p>
      </div>
      <div className="RIGHT   flex items-center gap-c14">
        <XCreaseBtn
          dPath={dPathDecreaseIcon}
          cantClick={item.amount <= 0 || 
            item.amount===1 && childrenAmount !==0 || 
            item.amount===1 && infantsAmount !==0 ||  
            item.amount===1 && petsAmount !==0 

          }
          onClick={handleDecrease}
        />
        <span>{item.amount}</span>
        <XCreaseBtn
          dPath={dPathIncreaseIcon}
          cantClick={item.amount >= item.limit}
          onClick={handleIncrease}
        />
      </div>
    </div>
  );
}
