import { useDispatch, useSelector } from "react-redux";
import { toggleIsCheckedReceive } from "../reducer/loginSlice";
export default function CheckContainer() {
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    dispatch(toggleIsCheckedReceive());
    e.stopPropagation();
  };

  const isCheckedReceive = useSelector(
    (state) => state.loginSlice.userInfo.isCheckedReceive
  );

  return (
    <div className="flex items-center || relative || w-6 h-6  ">
      <div
        className={`PINK ||  absolute z100  || pink-center ||
               bg-main rounded-sm mt-c-1
               ${isCheckedReceive ? " w-c18 h-c18" : "w-c0 h-c0"}`}
      ></div>
      <input
        type="checkbox"
        name="checkbox"
        className="GRAY-BORDER || w-6 h-6 mt-c2  ||  border-gray-400 border-c1 border-solid 
                 "
        onClick={(e) => handleOnClick(e)}
      />
    </div>
  );
}
