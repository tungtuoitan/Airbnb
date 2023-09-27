import FinalFooterRoom from "../components/finalFooterRoom";
import MiddleFooter2 from "./middleFooter2";

export default function FooterOnRoom() {
  return (
    <div
      className=" px-6 py-6 7:px-10 11:px-20 13:px-0  11:pb-0
    border-t-c1 border-solid border-gray-300 pb-20
    flex justify-center bg-gray-200/50 "
    >
      <div className="11:w-c1120  w-full">
        <MiddleFooter2 />
        <FinalFooterRoom />
      </div>
    </div>
  );
}
