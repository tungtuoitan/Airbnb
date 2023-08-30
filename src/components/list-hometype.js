import { useDispatch, useSelector } from "react-redux";
import { setDisplayingIndex } from "../reducer/header2Slice.js";
import hometypeArr from "../datas/home-types.js";

export default function ListHomeType() {
  const dispatch = useDispatch();
  const displayingIndex = useSelector((state) => state.header2.displayingIndex);
  const handleOnClick = (index) => {
    dispatch(setDisplayingIndex(index));
  };

  return (
    <>
      {hometypeArr.map((item, index) => {
        return (
          <div
            key={item.id}
            onClick={()=>{handleOnClick(index)}}
            className={` ITEM    cursor-pointer pt-c15 pb-c11 7:pt-c18 7:pb-c14 inline-flex flex-col items-center   ${
              index === displayingIndex ? "color222 border-bottom-unknown" : ""
            }  `}
          >
            <img
              src={item.path}
              className={`w-6 h-6  ${
                index === displayingIndex ? "opacity-100 " : "opacity-60"
              }`}
            />
            <span
              className={`    text-c12 text-gray7 text-c12 font-semibold mt-c5 whitespace-nowrap  ${
                index === displayingIndex ? "color222 " : ""
              }   `}
            >
              {item.name}
            </span>
          </div>
        );
      })}
    </>
  );
}
