import ArrowLeft from "./arrowLeft";

export default function BackBtn() {
  return (
    <div
      className={`absolute || left-4 w-c32 h-c32 || flex justify-center 
    items-center || text-black222 cursor-pointer hover:bg-gray-200 rounded-full`}
      onClick={handleOnClick}
    >
      <ArrowLeft />
    </div>
  );
}
