import EmtyDiv2 from "./emtyDiv2";
import OwnerAvtContainer from "./ownerAvtContainer";
import ThinRec from "./thinRectangle";

export default function BookContainer() {
  return (
    <div className=" relative ">
      <EmtyDiv2 />
      <div
        className="bg-gray-200 w-16 flex  absolute top-0 left-0 
      border-r-1 border-solid border-gray-300  border-b-1       
       h-c72  rounded-book-icon "
      >
        <ThinRec/>
        <div className="flex items-center justify-center w-full  ">
          <OwnerAvtContainer />
        </div>
      </div>
    </div>
  );
}
