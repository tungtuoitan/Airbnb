import DotB from "./dotB";
import TextA from "./textA";
import TextLocation from "./textLocation";

export default function LeftInfo() {
  return (
    <div className="  text-c14 7:flex items-center 7:opacity-80 ">
      <TextA />
      <div className="hidden 7:block">
        <DotB />
      </div>
      <TextLocation />
    </div>
  );
}
