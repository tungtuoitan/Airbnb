import MenuBarSmartf from "./menu-bar-smartf";
import TripsBody from "./tripsBody";
import TripsFooter from "./tripsFooter";
import TripsHeader from "./tripsHeader";

export default function Trips() {
  return (
    <div>
      <div className="w-full h-full bg-white px-6 || text-left text-black222 ">
        
        <TripsHeader />
        <TripsBody />
        <TripsFooter />
      </div>
      <MenuBarSmartf />
    </div>
  );
}
