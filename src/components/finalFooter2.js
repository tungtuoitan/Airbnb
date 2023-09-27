import FinalFooterLine1 from "./finalFooterLine1";
import FinalFooterLine2 from "./finalFooterLine2";
import FinalFooterLine3 from "./finalFooterLine3";
import BlackFbIcon from "./fbBlackIcon";
import BlackInstagramIcon from "./blackInstagramIcon";
import BlackTwitterIcon from "./blackTwitterIcon";

function FinalFooter2() {
  return (
    <div
      className="FINAL_FOOTER text-left 9:text-center font-size14 
     font-semibold color222 py-c24
     11:flex 11:justify-between
    "
    >
      <div className=" 11:flex ">
        <FinalFooterLine2 />
        <div>
          <FinalFooterLine3 />
        </div>
      </div>
      <div className=" flex gap-2 items-center 9:justify-center gap-c20 mt-c-12 ">
        <div className=" mt-4">
          <FinalFooterLine1 />
        </div>

        <div className="flex gap-4    h-full pt-c3 11:pt-4 ">
          <BlackFbIcon />
          <BlackTwitterIcon />
          <BlackInstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default FinalFooter2;
