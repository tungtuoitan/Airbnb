import { useDispatch, useSelector } from "react-redux";

export default function IsReceiveDiv1() {
  const isReceive = useSelector((state) => state.loginSlice.isReceive);
  return (
    <div className="flex items-center ||  gap-4 mt-4  pb-10 ">
      <div className="w-full h-c20 || border2 ">
        <label className="c-template grid gap-c14 border1 ||  ">
          <div className="flex items-center  relative  ">
            <div
              className={`PINK || w-c18 h-c18 ||  absolute z100  || pink-center ||
               bg-main rounded-sm mt-c-1`}
            ></div>
            <input
              type="checkbox"
              name="checkbox"
              className="w-6 h-6 mt-c2 ||  border-gray-400 border-c1 border-solid 
                 "
            />
          </div>
          <div className="flex items-center pb-c2 justify-start">
            I don’t want to receive marketing messages from Airbnb.
          </div>
        </label>
      </div>
    </div>
  );
}
