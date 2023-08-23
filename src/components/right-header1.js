import DefaultAvtIcon from "../icons/default-avt-icon";
import GlobalIcon from "../icons/global-icon";
import HamburgerIcon from "../icons/hamburger-icon";
import { rightOfHeader1 as style } from "../styles/mainStyle";

export default function RightofHeader1() {
  return (
    <div className={style.container}>
      <GlobalIcon />
      <div className={style.div1}>
        <HamburgerIcon />
        <DefaultAvtIcon />
      </div>
    </div>
  );
}
