import { forwardRef } from "react";
import ShowAllPhotoBtn from "./showAllPhotoBtn";



export const ImgsOnLaptopUI = forwardRef((props, ref) => {
  const { height, imgArr } = props;
  return (
    <div name='Photos' 
    className="hidden 7:block px-10 11:px-20 7:pt-6 11:flex justify-center
    cursor-pointer">
      <div
        className="7:grid grid-cols-4 rounded-xl overflow-hidden gap-2 11:w-c1120
        relative "
        ref={ref}
      >
        {imgArr.map((item, index) => {
          return (
            <img
              src={item}
              key={index}
              style={{ height: `${height}px` }}
              className={` object-cover min-h-full min-w-full   ${
                index === 0
                  ? "col-start-1 col-end-3 row-start-1 row-end-3  "
                  : ""
              }`}
            />
          );
        })}
        <ShowAllPhotoBtn/>
      </div>
    </div>
  );
});
