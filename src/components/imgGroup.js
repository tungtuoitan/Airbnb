import React, { useRef, useState } from "react";
import Slider from "./slider";
import InvisibleLayer from "./invisible-layer";
export default function ImgGroup() {
  return (
    <div className="aspect-square  relative rounded-xl overflow-hidden mb-c14   "
    >
      <Slider />
      <InvisibleLayer />
    </div>
  );
}
