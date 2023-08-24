import React, { useRef, useState } from "react";
import Slider from "./slider2";
import InvisibleLayer from "./invisible-layer";
import { OwnerContext } from "../context/ownerContext";

export default function ImgSlideContainer (){
    const { home, owner, path } = this.props;

    return <div className="SLIDER_CONTAINER  border1       aspect-square  relative rounded-xl overflow-hidden mb-c14    ">
    <Slider path={path} />
    <OwnerContext.Provider value={owner}>
      <InvisibleLayer />
    </OwnerContext.Provider>
  </div>
}