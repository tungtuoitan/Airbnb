import MenuBarSmartf from "./menu-bar-smartf";
import WishlistsContainer from "./wishlistsContainer";
import WishlistsUnLogIn from "./wishlistsUnLogIn";
import Footer2 from "./footer2";
import OtpCheck from "./otpCheck";
import Confirm from "./confirm";
import { useDispatch, useSelector } from "react-redux";

export default function Wishlists() {
  const isLogged = useSelector((state) => state.accSlice.isLogged);
  return (
    <>
      {isLogged ? (<WishlistsContainer />) : (<WishlistsUnLogIn />)}
      <MenuBarSmartf />
      <Footer2 />
    </>
  );
}
