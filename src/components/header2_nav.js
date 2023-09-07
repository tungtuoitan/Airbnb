import ArrowLeftNav from "./arrowLeftNav";
import RightNav from "./rightNav";

function Header2Nav() {
  return (
    <div
      className=" NAVIGATION  flex justify-between 7:px-10 14:px-20  
    absolute top-0 left-0 w-full h-full"
    >
      <ArrowLeftNav />
      <RightNav />
    </div>
  );
}

export default Header2Nav;
