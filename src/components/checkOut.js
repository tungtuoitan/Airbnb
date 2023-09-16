import { truncateText } from "../function/makeTextShorter";

export default function CheckOut() {
  return (
    <div
      className="h-full text-c12   flex-none  
    w-full text-left flex justify-start items-center
    col-start-5 col-end-6"
    >
      <div
        className="border-r-c1 border-solid border-gray-300 w-full
        "
      >
          <div
            className="text-center text-black222 font-bold 
      leading-4 whitespace-nowrap "
          >
            Check out
          </div>
          <p className="whitespace-nowrap text-center text-gray-400">Add dates</p>
      </div>
    </div>
  );
}
