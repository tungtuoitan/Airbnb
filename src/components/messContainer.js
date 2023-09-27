import BtnU1 from "./btnU1";
import TextWhenYou from "./textWhenYou";
import TextYouHave from "./textYouHave";

export default function MessContainer() {
  return (
    <div className="text-center text-c18   ">
      <TextYouHave />
      <TextWhenYou />
      <div
        className="w-full flex justify-center
          "
      >
        <BtnU1 name={"Explore Airbnb"} />
      </div>
    </div>
  );
}
