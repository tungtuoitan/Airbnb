import { useContext } from "react";
import { IndexContext } from "../context/indexContext";
import { homeList } from "../datas/homeListOriginal";

export default function OwnerAvtContainer() {
    const i = useContext(IndexContext)
  return (
    <div className="w-10 h-10   shadow-md first-letter:border-1 border-solid border-gray-400 rounded-full overflow-hidden ">
      <img src={homeList[i].owner.avatar} />
    </div>
  );
}
