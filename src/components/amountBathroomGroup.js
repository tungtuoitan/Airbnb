import { useDispatch, useSelector } from "react-redux";
import AmountBathRoomItem from "./amountBathroomsItem";


export default function AmountBathroomGroup() {
  const dispatch = useDispatch()
  const amountBeds = useSelector(state=>state.filterSlice.amountBeds)
  return (
    <div className=" relative left-c-24 w-screen px-c20 pr-c20
    || overflow-x-scroll scrollable-element">
      <div className=" flex justify-start ">
        <AmountBathRoomItem amount='Any' />
        <AmountBathRoomItem amount='1' />
        <AmountBathRoomItem amount='2' />
        <AmountBathRoomItem amount='3' />
        <AmountBathRoomItem amount='5' />
        <AmountBathRoomItem amount='6' />
        <AmountBathRoomItem amount='7' />
        <AmountBathRoomItem amount='8+' />
      </div>
    </div>
  );
}
