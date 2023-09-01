import { useDispatch, useSelector } from "react-redux";

export default function AmountItem({ type,amount }) {
  const dispatch = useDispatch();
  let x 
  
  if(type==='Beds'){
    x =  useSelector((state) => state.filterSlice.amountBeds);
  } else if(type ==='Bedrooms'){
    x =  useSelector((state) => state.filterSlice.amountBedrooms);
  } else{
    x =  useSelector((state) => state.filterSlice.amountBathrooms);

  }
 
  return (
    <div className={`${amount==='8+' ? 'pr-c28':'pr-2'} `}>
      <div
        className={` rounded-full 
        || 
        || flex justify-center items-center 
        || border-c1 border-solid border-gray-300 
        ${ 
          x === amount
            ? "bg-black222 text-white w-20 h-10"
            : "bg-white text-black222 w-c60 h-10"
        }`}
      >
        {amount}
      </div>
    </div>
  );
}
