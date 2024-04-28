import React from "react";

export default function ImageSlice({imgArr}) {
  return (
    <>
      {imgArr.map((item, index) => {
        return (
          <img
            src={item}
            key={index}
            className="XXX m-0 max-w-full w-full h-full max-h-full object-cover"
          />
        );
      })}
    </>
    
  );
}
