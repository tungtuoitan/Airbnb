import HeaderLoginLaptop from "../components/headerLoginLaptop";
import InputBody from "../components/inboxBody";
import MenuBarSmartf from "../components/menu-bar-smartf";

export default function Inbox() {
  return (
    <div className="overflow-hidden">
      <HeaderLoginLaptop />
      <InputBody />
      <MenuBarSmartf />
    </div>
  );
}
