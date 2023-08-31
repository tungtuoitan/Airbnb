import Footer2 from "../components/footer2";
import HeaderLoginLaptop from "../components/headerLoginLaptop";
import MenuBarSmartf from "../components/menu-bar-smartf";
import TripsBody from "../components/tripsBody";
import TripsFooter from "../components/tripsFooter";
import TripsHeader from "../components/tripsHeader";

export default function Trips() {
  return (
    <div className="">
      <HeaderLoginLaptop/>
      <div className="w-full h-calc-u4 || bg-white px-6 7:px-10 11:px-20  
      || text-left text-black222 ">
        <TripsHeader />
        <TripsBody />
        <TripsFooter />
      </div>
      <Footer2/>
      <MenuBarSmartf />
    </div>
  );
}
