import MenuBarSmartf from "../components/menu-bar-smartf";
import WishlistsContainer from "../components/wishlistsContainer";
import WishlistsUnLogIn from "../components/wishlistsUnLogIn";
import Footer2 from "../components/footer2";
import OtpCheck from "../components/otpCheck";
import Confirm from "../components/confirm";
import HeaderLoginLaptop from "../components/headerLoginLaptop";
import { useDispatch, useSelector } from "react-redux";

export default function Wishlists() {
  const isLogged = useSelector((state) => state.accSlice.isLogged);
  return (
    <>
      <div className="hidden 7:block sticky top-0 bg-white zmax3">
        <HeaderLoginLaptop/>
      </div>
      {isLogged ? <WishlistsContainer /> : <WishlistsUnLogIn />}
      <MenuBarSmartf />
      <Footer2 />
    </>
  );
}
