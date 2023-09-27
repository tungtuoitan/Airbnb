import AmountItemGroup from "./amountItemGroup.js";

export default function XGroup({type}) {
  return (
    
      <div className="pb-2  ">
        <p className="text-left pt-4 pb-6 ">{type}</p>
        <AmountItemGroup  type={type}/>
      </div>
  );
}
