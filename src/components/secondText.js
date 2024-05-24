import HeartBtn from "./HeartBtn";
import TextReview from "./TextReview";
import TextStar from "./TextStar";
import BtnsOnRight from "./btnsOnRight";
import DotB from "./dotB";
import HeartIcon from "./heartIcon";
import LeftInfo from "./leftInfo";
import ShareIcon from "./shareIconB";
import TextA from "./textA";
import TextHost from "./textHost";
import TextLocation from "./textLocation";

export default function MoreInfo() {
  return (
    <div className="7:flex justify-between items-center mt-c6">
      <LeftInfo />
      <BtnsOnRight/>
    </div>
  );
}
