import React, { lazy, Suspense } from "react";
import ImgGroup from "./imgGroup";
import TextGroupFallBackack from "./textGroupFallback";
const TextGroup = lazy(() => import("./textGroup"));

function Item() {

  return (
    <div className="max-w-full 16:border-c1x border-solidx border-transparentx   ">
      <>
        <ImgGroup />
        <Suspense fallback={<TextGroupFallBackack />}>
          <TextGroup />
        </Suspense>
      </>
    </div>
  );
}

export default React.memo(Item);
