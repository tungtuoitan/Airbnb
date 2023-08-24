import { useContext } from "react";
import { OwnerContext } from "../context/ownerContext";

export default function OwnerAvtContainer() {
    const owner = useContext(OwnerContext)
  return (
    <div className="w-10 h-10   shadow-md first-letter:border-1 border-solid border-gray-400 rounded-full overflow-hidden ">
      <img src={owner.avatar} />
    </div>
  );
}
