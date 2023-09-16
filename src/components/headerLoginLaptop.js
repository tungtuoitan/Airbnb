
import LogoIcon from "../icons/logo-icons";
import RightofHeader1 from "./right-header1";

export default function HeaderLoginLaptop() {
 
  return (
    <div className={`CONTAINER sticky top-0 z1000  hidden 7:block bg-white w-full border1`}>
      <div className={`px-10 border-b-1 11:px-20`}>
        <div className={`h-20 items-center  hidden 7:flex  justify-between`}>
          <LogoIcon />
          <RightofHeader1 />
        </div>
      </div>

    </div>
  );
}

