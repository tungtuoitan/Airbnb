import Dot2 from "./dot2";
import Icon5 from "./icon5";
import U1 from "./u1";

export default function Line3a() {
  return (
    <div
      className="
    || flex flex-wrap justify-center || pt-6 text-black222 "
    >
      <U1 content="Helps & support" path="https://www.airbnb.com/help" />
      <Dot2 />

      <U1
        content="Terms of Service"
        path="https://www.airbnb.com/help/article/2908"
      />
      <Dot2 />

      <U1
        content="Privacy Policy"
        path="https://www.airbnb.com/help/article/2855"
      />
      <Dot2 />

      <a
        className="flex justify-start items-center "
        href="https://www.airbnb.com/help/sale-share-opt-out"
        target='_blank'
      >
        <span className="mr-2 text-c11 font-bold underline">
          Your Privacy Choices
        </span>
        <span>
          <Icon5 />
        </span>
      </a>
    </div>
  );
}
