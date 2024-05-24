import { useDispatch, useSelector } from "react-redux";
import { setDisplayingIndex } from "../reducer/header2Slice.js";
import hometypeArr from "../datas/home-types.js";
import { setCurrentList, setNTimesShuffle } from "../reducer/bodySlice.js";
import {
  setFilterDefault,
  setLeftValue,
  setRightValue,
} from "../reducer/filterSlice.js";
import { setFilterDefault2 } from "../reducer/filterSlice2.js";
import getCurrentHomeList2 from "../function/getCurrentHomeList2.js";

export default function ListHomeType() {
  const dispatch = useDispatch();
  const displayingIndex = useSelector((state) => state.header2.displayingIndex);
  const graphWidth = useSelector((state) => state.filterSlice.graphWidth);
  const filter2 = useSelector((state) => state.filterSlice2.filter);
  const nTimesShuffle = useSelector((s) => s.bodySlice.nTimesShuffle);

  const handleOnClick = (index) => {
    dispatch(setDisplayingIndex(index));
    dispatch(setNTimesShuffle());
    dispatch(setFilterDefault());
    dispatch(setFilterDefault2());
    dispatch(setRightValue(graphWidth));
    dispatch(setLeftValue(0));
    dispatch(setCurrentList(getCurrentHomeList2(filter2, nTimesShuffle)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {hometypeArr.map((item, index) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              handleOnClick(index);
            }}
            className={`border-bottom-hover cursor-pointer pt-c15 pb-c11 7:pt-c18 7:pb-c14 inline-flex flex-col items-center   
                        ${
                          index === displayingIndex
                            ? "color222 border-bottom-unknown"
                            : ""
                        }  
                      `}
          >
            <img
              src={item.path}
              className={`w-6 h-6  ${
                index === displayingIndex ? "opacity-100 " : "opacity-60"
              }`}
            />
            <span
              className={`text-c12 text-gray7 font-semibold mt-c5 whitespace-nowrap  ${
                index === displayingIndex ? "color222 " : ""
              }   
                        `}
            >
              {item.name}
            </span>
          </div>
        );
      })}
    </>
  );
}
