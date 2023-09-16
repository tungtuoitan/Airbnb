import EditBar from "./editBar";
import WishlistsTitle from "./wishListsTitle";
import WishItems from "./wishItems";
import HeaderLoginLaptop from "./headerLoginLaptop";

export default function WishlistsContainer() {
  return (
      
      <div className=" px-6 7:px-10 11:px-20 pt-c12 pb-20 7:pb-20 11:pb-30 ">
        {/* <EditBar /> */}
        <WishlistsTitle />
        <WishItems />
      </div>
  );
}
