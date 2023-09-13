import InvisibleBar from "./invisibleBar";

import Slider2 from "./slider2";

export default function SliderOnMobile() {
  return (
    <div className="mb-6 relative 7:hidden">
      <InvisibleBar/>
      <Slider2/>
    </div>
  );
}
