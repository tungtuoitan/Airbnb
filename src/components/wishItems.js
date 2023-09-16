import EmtyWishList from "./emtyWishlist";
import HeartBtn2 from "./heartBtn2";
import Icon7 from "./icon7";
import WishItem from "./wishItem";
import { useDispatch, useSelector } from "react-redux";

export default function WishItems() {
  const wishIdArr = useSelector((s) => s.wishSlice.wishIdArr);

  return (
    <div
      className={`items  grid  7:grid-cols-3 11:grid-cols-4 
      gap-x-6 gap-y-c12 7:gap-y-6  11:gap-y-c30
      ${wishIdArr.length === 0 ? "" : "grid-cols-2"}`}
    >
      {wishIdArr.length === 0 ? (
        <EmtyWishList />
      ) : (
        <>
          {wishIdArr.map((item, index) => {
            return (
              <div className="relative" key={index}>
                <div className="absolute right-4 top-4">
                  <HeartBtn2 item={item}/>
                </div>
                <WishItem i={item} key={index} />;
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
