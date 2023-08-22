import { actionIsTypingSearchPopUpOpen } from "../../actions/action";
import { useDispatch, useSelector } from "react-redux";

export default function InputWhereTo({ handleOnChange }) {
  const placeholderOnSearchInput = useSelector(
    (state) => state.root.placeholderOnSearchInput
  );
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(actionIsTypingSearchPopUpOpen());
    
  };

  return (
    <div
      className="INPUT_CONTAINER     border-1 border-gray-300 h-c60 rounded-xl  
          relative"
      onClick={handleOnClick}
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
        className={`INPUT      w-full h-full pr-c20 pl-12 text-light  focus:outline-0
        font-medium rounded-3xl text-sm      
        placeholder:text-sm   
        ${
          placeholderOnSearchInput === "Search destinations"
            ? "placeholder:text-gray-600"
            : "c-placeholder-u4"
        }`}
        placeholder={placeholderOnSearchInput}
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
    </div>
  );
}
