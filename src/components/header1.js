import LogoIcon from "../icons/logo-icons";
import Header1Mobile from "./header1-mobile";
import RightofHeader1 from "./right-header1";
import SearchBoxLaptop from "./searchBoxLaptop";
import { style } from "../styles/header1-style";

function Header1() {
 
  return (
    <div className={style.container}>
      <div className={style.div2}>
        <div className={style.div3}>
          <LogoIcon />
          <SearchBoxLaptop />
          <RightofHeader1 />
        </div>
      </div>

      <Header1Mobile />
    </div>
  );
}

export default Header1;
