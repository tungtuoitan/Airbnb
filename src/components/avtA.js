import SuperHostIcon from "./superHostIcon";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import { Link } from "react-scroll";

export default function AvtA() {
  const owner = useGetCurrentHome().owner;
  return (
    <Link
      to="meetYourHost"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={window.innerWidth<745 ? 0 : -80}
      duration={500}
      className="  relative w-12 h-12 7:w-c56 7:h-c56  cursor-pointer"
    >
      <div className=" w-12 h-12 7:w-c56 7:h-c56 rounded-full object-cover overflow-hidden ">
        <img src={owner.avatar.replace("Airbnb/","")}></img>
      </div>
      <SuperHostIcon />
    </Link>
  );
}
