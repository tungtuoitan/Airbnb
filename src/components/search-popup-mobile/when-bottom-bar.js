import ResetBtn from "./resetBtn";
import NextBtn from "./nextBtn";

export default function WhenBottomBar() {

  return (
    <div
      className="BOTTOM_BAR     absolute left-0 bottom-0 w-full  
         border-top-05px border-solid border-gray-200 px-6
          py-c12 flex justify-between items-center"
    >
      <ResetBtn />
      <NextBtn/>

      
    </div>
  );
}
