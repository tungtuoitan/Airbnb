import { useContext } from "react";
import { IndexContext } from "../context/indexContext";
import { useSelector } from "react-redux";

export default function OwnerAvtContainer() {
  const i = useContext(IndexContext);
  const currentHomeList = useSelector((s) => s.bodySlice.currentList);
  let index;
  for (let j = 0; j < currentHomeList.length; j++) {
    if (currentHomeList[j].id === i) {
      index = j;
      break;
    }
  }
  return (
    <div className="w-10 h-10   shadow-md first-letter:border-1 border-solid border-gray-400 rounded-full overflow-hidden ">
      <img src={currentHomeList[index].owner.avatar} />
    </div>
  );
}
