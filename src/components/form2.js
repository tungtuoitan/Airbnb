import IsReceive from "./IsReceive";
import FormSignUp from "./formSignUp";
import GrayLine from "./grayLine";

export default function Form2() {
  return (
    <div className=" h-calc-u3  || 1 overflow-y-scroll">
      <div className="MAIN    p-6 w-full h-calc-80screen 7:h-c388  ">
        <FormSignUp />
        <GrayLine />
        <IsReceive />
      </div>
    </div>
  );
}
