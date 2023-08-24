import HometypeBar from "../components/hometype-bar";
import Header2Nav from "./header2_nav";
import useRefAddEvent from "../hooks/useRefAddEvent";
import { useListenScrollTop0 } from "../hooks/useListenScrollTop0";

function Header2() {
  const ref = useRefAddEvent();
  let isScrollTop0 = useListenScrollTop0();

  return (
    <div
      className={`HEADER_2     sticky top-0  bg-white z1000 
    ${
      isScrollTop0 === true && window.innerWidth >= 745
        ? ""
        : "box-shadow-header2"
    } 
    `}
    >
      <div className="w-full h-c70 7:h-20"></div>

      <div className=" CONTAINER_ROOT    relative  7:pr-10 pl-0 7:pl-10 14:px-20 box-border    ">
        <Header2Nav />

        <HometypeBar ref={ref} />
      </div>
    </div>
  );
}
export default Header2;
