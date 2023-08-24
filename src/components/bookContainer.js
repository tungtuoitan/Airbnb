import EmtyDiv2 from "./emtyDiv2";
import OwnerAvtContainer from "./ownerAvtContainer";

export default function BookContainer() {
  return (
    <div className=" relative ">
      <EmtyDiv2 />
      <div className=" w-16 flex  absolute top-0 left-0 border-r-1 border-solid border-gray-300  border-b-1        h-c72 bg-gray-EA   rounded-book-icon ">
        <div className="w-c6 h-full border-r-2 border-solid border-gray-300 border-l-1   "></div>
        <div className="flex items-center justify-center w-full  ">
          <OwnerAvtContainer />
        </div>
      </div>
    </div>
  );
}
