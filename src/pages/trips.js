import Footer2 from "../components/footer2";
import HeaderLoginLaptop from "../components/headerLoginLaptop";
import MenuBarSmartf from "../components/menu-bar-smartf";
import TripsBody from "../components/tripsBody";
import TripsFooter from "../components/tripsFooter";
import TripsHeader from "../components/tripsHeader";
import { useSelector } from "react-redux";

export default function Trips() {
  const tripsArr = useSelector((s) => s.tripsSlice.tripsArr);
  return (
    <div className="">
      <HeaderLoginLaptop />
      <div
        className={`w-full bg-white px-6 7:px-10 11:px-20  
      || text-left text-black222 
      ${tripsArr.length === 0 ? "h-calc-u4" : ""}`}
      >
        <TripsHeader />
        <TripsBody />
        <TripsFooter />
      </div>
      <Footer2 />
      {window.innerWidth < 750 ? <MenuBarSmartf /> : <></>}
      
    </div>
  );
}
