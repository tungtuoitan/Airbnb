import MenuBarSmartf from "../components/menu-bar-smartf";
import WishlistsContainer from "../components/wishlistsContainer";
import WishlistsUnLogIn from "../components/wishlistsUnLogIn";
import Footer2 from "../components/footer2";
import OtpCheck from "../components/otpCheck";
import Confirm from "../components/confirm";
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
