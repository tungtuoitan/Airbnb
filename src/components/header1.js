import Header1Mobile from "./header1-mobile";
import Header1Laptop from "./header1Laptop";

function Header1() {
  return (
    <div className={`fixed top-0  zmax bg-white w-full `}>
      {window.innerWidth < 750 ? <Header1Mobile /> : <Header1Laptop/>}
    </div>
  );
}

export default Header1;
