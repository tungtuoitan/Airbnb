import BackIcon from "../icons/backIcon";
import HeaderLoginLaptop from "./headerLoginLaptop";
import LeftArrowIcon from "./leftArrowIcon";
import ShareIcon from "./shareIcon";
import ThreeDotsIcon from "./threeDotsIcon";

export default function WishPage() {
  return (
    <div>
      <div className="hidden 7:block sticky top-0 bg-white zmax3">
        <HeaderLoginLaptop />
      </div>
      <div
        className=" w-full h-c56 text-black222 flex justify-between
       items-center relative w-full px-c16 7:px-c32"
      >
        <div className="flex items center gap-4">
          <div className=" w-c32 h-c32 flex justify-center items-center  ">
            <LeftArrowIcon />
          </div>
          <div className="flex items-center">title</div>
        </div>
        <div className="flex  gap-c20">
          <div className="w-c32 h-c32  flex justify-center items-center">
            <ShareIcon />
          </div>
          <div className="w-c32 h-c32 mr-c4 flex justify-center items-center">
            <ThreeDotsIcon />
          </div>
        </div>
      </div>
      {/* /BODY */}
      <div className="w-full h-c100 border2 px-6">
        <div className="w-full h-full border3">k</div>
      </div>
    </div>
  );
}
