import Dot from "./dot";
import Icon5 from "./icon5";

export default function FinalFooterLine3() {
  return (
    <div className="font-normal flex flex-wrap 9:flex 9:justify-center ">
      <a>Terms</a>
      <Dot />
      <a>Sitemap</a>
      <Dot />
      <a>Privacy</a>
      <Dot />
      <a className="flex justify-start items-center ">
        <span className="mr-2">Your Privacy Choices</span>
        <span>
          <Icon5 />
        </span>
      </a>
    </div>
  );
}
