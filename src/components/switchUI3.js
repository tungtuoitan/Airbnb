import MiniTickIcon from "./miniTickIcon";

export default function SwitchUI3({ownerValue }) {
  return (
    <div
      className={`text-c15  w-c36 min-w-12 h-c24 cursor-pointer
      || rounded-2xl flex  shrink-0 transition-all 
      ${
        ownerValue
          ? "bg-black222 justify-end"
          : "bg-mgray justify-start hoverOn11"
      }`}
    >
      <div
        className="WHITE_CIRCLE 
      bg-white w-c22 h-c20 rounded-full m-c2
      flex justify-center items-center transition-all "
      >
        <MiniTickIcon ownerValue={ownerValue} />
      </div>
    </div>
  );
}
