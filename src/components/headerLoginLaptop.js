

import LogoIcon from "../icons/logo-icons";
import RightofHeader1 from "./right-header1";
import { style } from "../styles/headerLogin-style";

export default function HeaderLoginLaptop() {
 
  return (
    <div className={style.container}>
      <div className={style.div2}>
        <div className={style.div3}>
          <LogoIcon />
          <RightofHeader1 />
        </div>
      </div>

    </div>
  );
}

