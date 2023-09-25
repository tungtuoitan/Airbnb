import ImgGroup from "./imgGroup";
import TextGroup from "./textGroup";
import { lazy, Suspense } from "react";
import { isElementInViewport } from "../function/checkIfItemInViewPort";
import { useRef, useEffect, useState } from "react";
import { useCustomLazyLoading } from "../hooks/useCustomLazyLoading";

export default function Item() {
  const {isInViewPort,contRef}= useCustomLazyLoading()
  return (
    <div ref={contRef} className="  max-w-full 16:border-c1x border-solidx border-transparentx   ">
      {isInViewPort ? (
          <>
            <ImgGroup />
            <TextGroup />
          </>
          
      ) : (
        <div className=" w-full h-full opacity-50">Loading ...</div>
      )}
    </div>
  );
}
