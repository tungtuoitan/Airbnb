import Header1Mobile from "./header1-mobile";
import { useDispatch, useSelector } from "react-redux";
import Header1Laptop from "./header1Laptop";

function Header1() {
  return (
    <div className={`fixed top-0  zmax bg-white w-full `}>
      <Header1Laptop/>
      <Header1Mobile />
    </div>
  );
}

export default Header1;
