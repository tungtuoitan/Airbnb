import TextReview from "./TextReview";
import TextStar from "./TextStar";
import DotB from "./dotB";
import TextHost from "./textHost";

export default function TextA() {
  return (
    <div className="flex justify-start color222 7:font-semibold   ">
      <TextStar />
      <DotB />
      <TextReview />
      <DotB />
      <TextHost />
    </div>
  );
}
