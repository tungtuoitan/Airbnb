

export default function AmountItemUI({ amount, stateValue, handleOnClick }) {
    
  return (
    <div className={`${amount === "8+" ? "pr-c28" : "pr-2"} `}
    onClick={(e)=>handleOnClick(e)}
    >
      <div
        className={` rounded-full  
          || cursor-pointer 
          || flex justify-center items-center 
          || border-c1 border-solid border-gray-300 hover:border-black
          ${
            stateValue === amount
              ? "bg-black222 text-white w-20 h-10"
              : "bg-white text-black222 w-c60 h-10"
          }`}
      >
        {amount}
      </div>
    </div>
  );
}
