import LogoIcon from "../icons/logo-icons";
import RightofHeader1 from "./right-header1";
import MidContainer from './midContainer'

export default function Header1Top() {
  return (
    <div
      className={`w-full xwidth-custom h-20 items-center  
        hidden 7:flex  justify-between 
        `}
    >
      <LogoIcon />
      <MidContainer/>
      <RightofHeader1 />
    </div>
  );
}
