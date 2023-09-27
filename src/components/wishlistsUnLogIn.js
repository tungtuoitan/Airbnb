import LoginBtn2 from "./search-popup-mobile/loginBtn2";
import MenuBarSmartf from "./menu-bar-smartf";
export default function WishlistsUnLogIn() {
  return (
    <div>
      <div className="text-left text-black222 px-6 pt-10 h-calc-u2 ">
        <h1 className="text-c32  font-semibold mb-6">Wishlists</h1>
        <div className="text-c22  font-semibold leading-c25 mb-2  ">
          Log in to view your wishlists
        </div>
        <p className="text-c14 leading-snug mb-6 text-gray7">
          Your can create, view, or edit wishlists once your've logged in.
        </p>
        <LoginBtn2 />
      </div>
      <div></div>
    </div>
  );
}
