import PhoneNumberLists from "./phoneNumberLists";
import ArrowDownIcon from "./arrowDownIcon";
import { useDispatch,useSelector } from "react-redux";
const tw = {
  container: `p-c10 h-c56 flex justify-between cursor-pointer`,
  div1: `flex flex-col`,
  country: `text-xs color-gray7 text-left`,
  japan: `color222  mt--3 hide-arrow w-full  focus:outline-none text-left`,
  ArrowDiv: ` flex items-center pr-c4 color222`,
};
export default function TopPart() {
  const dispatch = useDispatch()
  const threePhoneNumber = useSelector(state=>state.loginSlice.threePhoneNumber)
  const country = useSelector(state=>state.loginSlice.country)
  const valueSelected = useSelector(state=>state.loginSlice.valueSelected)

  return (
    <div className={tw.container}>
      <div className={tw.div1}>
        <span className={tw.country}>Country/Region</span>
        <div className={tw.japan}>{valueSelected}</div>
        <PhoneNumberLists />
      </div>
      <div className={tw.ArrowDiv}>
        <ArrowDownIcon />
      </div>
    </div>
  );
}
