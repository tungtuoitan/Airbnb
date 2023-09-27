import { useDispatch, useSelector } from "react-redux";

export default function Input2WhereTo() {
    const placeholderOnSearchInput = useSelector(
      (state) => state.root.placeholderOnSearchInput
    );
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
      dispatch(whereToInputChange(e.target.value));
    };
  return (
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
  );
}
