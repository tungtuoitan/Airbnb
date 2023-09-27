import { useSelector } from "react-redux";

export const useCalculateTotalGuests = ()=>{
    const whoComing = useSelector((s) => s.whoComing);
 
  let amount =
    whoComing.adults.amount +
    whoComing.children.amount +
    whoComing.infants.amount +
    whoComing.pets.amount;
    return amount
}