import AgreeText from "./agreeText";
import GrayLine from "./grayLine";
import ItemInFinishForm from "./itemInFinishForm";
import MainBtn from "./mainBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
  setBirthDay,
  setEmail,
} from "../reducer/loginSlice";
import FirstNameInput from "./firstNameInput";
import LastNameInput from "./lastNameInput";
import BirthdateInput from "./birthdateInput";
import NameGroup from "./nameGroup";
import BirthGroup from "./birthGroup";
import { EmailGroup } from "./emailGroup";

export default function FormSignUp() {
  const isLastNameFocus = useSelector(
    (state) => state.loginSlice.isLastNameFocus
  );

  return (
    <form className="">
      <NameGroup/>
      <BirthGroup/>
      <EmailGroup/>
      <AgreeText />
      <div className="mt-c26 mb-c24 ">
        <MainBtn content="Agree and continue" />
      </div>
    </form>
  );
}
