
import { useDispatch, useSelector } from "react-redux";

import FirstNameInput from "./firstNameInput";
import LastNameInput from "./lastNameInput";

export default function NameGroup() {
    const isLastNameFocus = useSelector(
        (state) => state.loginSlice.isLastNameFocus
      );
  return (
    <div>
      <div
        className={`w-full h-c111 ||    border-c1 border-solid border-gray-400 || cursor-pointer
        ${isLastNameFocus ? "rounded-lg" : "rounded-full"}`}
      >
        <FirstNameInput />
        <LastNameInput />
      </div>
      <p className="text-c12 text-gray-500 text-left leading-c16 -- mt-c6 ">
        Make sure it matches the name on your government ID
      </p>
    </div>
  );
}
