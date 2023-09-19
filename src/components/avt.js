

import { useDispatch, useSelector } from "react-redux";

export default function Avt() {
  const firstName = useSelector((s) => s.loginSlice.userInfo.firstName);
  const letter1 = firstName[0];
  return (
    <div
      className="w-c30 h-c30 rounded-full bg-black222
        flex justify-center items-center
        text-white font-bold"
    >
      {letter1}
    </div>
  );
}
