import TextReview from "./TextReview";
import TextStar from "./TextStar";
import DotB from "./dotB";
import TextHost from "./textHost";
import TextStar2 from "./textStar2";

export default function TextA() {
  return (
    <div className="flex justify-start color222 7:font-semibold   ">
      <TextStar2 />
      <DotB />
      <TextReview />
      <DotB />
      <TextHost />
    </div>
  );
}
