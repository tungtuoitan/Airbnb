import FormLoginContainer from "./formLoginContainer";
import FourBtnsContainer from "./fourBtnsContainer";
import NeedHelp from "./needHelp";
import OrContainer from "./orContainer";
import { useSelector } from "react-redux";

export default function MainLoginPopUp() {
  const isFinishOpen = useSelector((state) => state.loginSlice.isFinishOpen);
  return (
    <div
      className={`p-c32
    ${isFinishOpen ? "" : "relative"}`}
    >
      <FormLoginContainer />
      <OrContainer />
      <FourBtnsContainer />
      <NeedHelp />
    </div>
  );
}
