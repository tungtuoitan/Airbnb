import { useDispatch, useSelector } from "react-redux";

export default function AmountBathRoomItem({ amount,isFinal }) {
  const dispatch = useDispatch();
  const amountBathrooms = useSelector((state) => state.filterSlice.amountBathrooms);
  return (
    <div className={`${isFinal ? 'pr-c28':'pr-2'}`}>
      <div
        className={`w-20 h-10 rounded-full 
        || 
        || flex justify-center items-center 
        || border-c1 border-solid border-gray-300 
        ${ 
          amountBathrooms === amount
            ? "bg-black222 text-white"
            : "bg-white text-black222"
        }`}
      >
        {amount}
      </div>
    </div>
  );
}
