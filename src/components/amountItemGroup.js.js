import { useDispatch, useSelector } from "react-redux";
import AmountItem from "./amountItem";


export default function AmountItemGroup({type}) {
  return (
    <div className=" relative left-c-24  px-c20 pr-c20
    || overflow-x-scroll scrollable-element w-screen max-w-c745 7:w-full">
      <div className=" flex justify-start  ">
        <AmountItem type={type} amount='Any' />
        <AmountItem type={type} amount='1' />
        <AmountItem type={type} amount='2' />
        <AmountItem type={type} amount='3' />
        <AmountItem type={type} amount='5' />
        <AmountItem type={type} amount='6' />
        <AmountItem type={type} amount='7' />
        <AmountItem type={type} amount='8+' />
      </div>
    </div>
  );
}
