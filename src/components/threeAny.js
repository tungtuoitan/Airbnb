import { truncate } from "lodash";
import { useCreate3W } from "../hooks/useCreate3W";
import { truncateText } from "../function/makeTextShorter";

export default function ThreeAny() {
  const { where, when, who } = useCreate3W();

  return (
    <div className=" pb-1   ">
      <div className=" w-28 text-left whitespace-nowrap  ">{where ==='I\'m flexible'? 'Anywhere' : truncateText(where,16) }</div>
      <div className=" text-xs text-left">
        <span className=" w-28  font-light color71">{when}</span>

        <span className="list-disc w-28  pl-3 font-light color71 ">
          <span>•</span> {who===1 ? 'Add guests': `${who} guests`}
        </span>
      </div>
    </div>
  );
}
