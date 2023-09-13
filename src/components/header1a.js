import LogoIcon from "../icons/logo-icons";
import Header1Mobile from "./header1-mobile";
import RightofHeader1 from "./right-header1";
import SearchBoxLaptop from "./searchBoxLaptop";

export default function Header1a() {
  return (
    <div  className=" zmax3 bg-white w-full hidden 7:block ">
      <div className="px-10 11:px-20 border-b-1 11:flex justify-center   ">
        <div
          className="h-20 items-center  hidden 7:flex  justify-between 11:w-c1120
          "
        >
          <LogoIcon />
          <SearchBoxLaptop />
          <RightofHeader1 />
        </div>
      </div>

      <Header1Mobile />
    </div>
  );
}
