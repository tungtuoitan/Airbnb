import MiniTickIcon from "./miniTickIcon";

export default function SwitchUI({ handleOnClick, ownerValue }) {
  return (
    <div
      className={`text-c15  w-c48 min-w-12 h-8 cursor-pointer
      || rounded-2xl flex  shrink-0 transition-all 
      ${
        ownerValue
          ? "bg-black222 justify-end"
          : "bg-mgray justify-start hoverOn11"
      }`}
      onClick={(e) => handleOnClick(e)}
    >
      <div
        className="WHITE_CIRCLE 
      bg-white w-7 h-7 rounded-full m-c2
      flex justify-center items-center  "
      >
        <MiniTickIcon ownerValue={ownerValue} />
      </div>
    </div>
  );
}
