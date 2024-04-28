import React, {lazy, Suspense} from "react";
import InvisibleLayer from "./invisible-layer";
import ImgFirst from "./imgFirst"

const SliderTry = lazy(() => import("./sliderTry"))

export default function ImgGroup() {
  
  return (
    <div
      className="aspect-square  relative rounded-xl overflow-hidden mb-c14  w-full    "
    >
      <Suspense fallback={<ImgFirst/>}>
        <SliderTry  />
      </Suspense>
      <InvisibleLayer />
    </div>
  );
}
