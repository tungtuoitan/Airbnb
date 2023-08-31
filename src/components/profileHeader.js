import ArrowRightBtn from "./arrowRightIcon";
import MobileAvt from "./mobileAvt";

export default function ProfileHeader() {
  return (
    <div className=" text-black222 || flex justify-between items-center
    || border-b-c1 border-gray-300 border-solid || pb-4">
      <div className="flex gap-4 justify-start ">
        <MobileAvt />
        <div className="text-left  pt-c3">
          <p className="text-c18 mb-c-2 ">Tung</p>
          <p className="text-sm text-gray-500">Show profile</p>
        </div>
      </div>
      <ArrowRightBtn />
    </div>
  );
}
