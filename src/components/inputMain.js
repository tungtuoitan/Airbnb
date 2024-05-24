import { useDispatch, useSelector } from "react-redux";
import MessContainer from "./messContainer";

export default function InputMain() {
  const currentChoice = useSelector((state) => state.inboxSlice.currentChoice);
  const isMessOn = useSelector((state) => state.inboxSlice.isMessOn);


  return (
    <> 
      { !isMessOn ? <></> :  currentChoice === "All conversations" ? (
        <MessContainer />
      ) : currentChoice === "Archived conversations (0)" ? (
        <div className="flex justify-center items-center h-8 mt-6 text-gray-400 text-center">
          No Result 
        </div> 
      ) : ( 
        <div className="flex justify-center items-center h-8 mt-6 text-gray-400  text-center">
          No Result
        </div>
      )}
    </>
  );
}
