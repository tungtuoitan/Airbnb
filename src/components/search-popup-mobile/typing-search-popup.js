import InputWhereTo from "./input-where-to";
import { useDispatch,useSelector } from "react-redux";
import { whereToInputChange, actionFiveCitiesArr } from "../../actions/action";
import DestinationItem2 from "./destination-item2";
import fakeData from "../../datas/fake-data";

export default function TypingSearchPopup() {
  const dispatch = useDispatch(); 
  const isTypingSearchPopUpOpen = useSelector(state=>state.root.isTypingSearchPopUpOpen)
  const handleOnChange = (e) => {
    dispatch(whereToInputChange(e.target.value));

    if (e.target.value.length === 1) {
      let firstKeyword = e.target.value[0];
      let fiveCitiesArr = fakeData.citiesByLetter[firstKeyword];
      if (fiveCitiesArr === undefined) {
          fiveCitiesArr = [];
        } else {
        dispatch(actionFiveCitiesArr(fiveCitiesArr));
      }
    } else {
      dispatch(actionFiveCitiesArr([]));
    }
  };

  return (
    <div
      className={`w-screen h-calc-u2 bg-white fixed bottom-0 left-0 zmax3 
        rounded-2xl box-shadow-u5 rounded-4xl px-6 pt-10
        ${isTypingSearchPopUpOpen===true ? '': 'hidden'}`}
    >
      <div
        className="INPUT_CONTAINER      h-c60 rounded-xl  bg-grayf7 
          relative mb-6"
      >
        <span className="absolute  y-center left-c20 color222  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: "4",
              overflow: "visible",
            }}
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
        </span>

        <input
          className="INPUT      w-full h-full pr-c20 pl-12 text-light 
          placeholder:text-sm text-sm focus:outline-0
      placeholder:text-gray-600 font-medium rounded-3xl bg-grayf7"
          placeholder="Search destinations"
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
      </div>
      <DestinationItem2 />
    </div>
  );
}
