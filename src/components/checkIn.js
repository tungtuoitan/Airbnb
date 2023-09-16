import { truncateText } from "../function/makeTextShorter";

export default function CheckIn() {
  return (
    <div
      className="h-full text-c12   flex-none  
    w-full text-left flex justify-start items-center
    col-start-4 col-end-5"
    >
      <div
        className="border-r-c1 border-solid border-gray-300 w-full
        "
      >
          <div
            className="text-center text-black222 font-bold 
      leading-4 whitespace-nowrap "
          >
            Check in
          </div>
          <p className="whitespace-nowrap text-center text-gray-400">Add dates</p>
      </div>
    </div>
  );
}
