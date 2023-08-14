import { useEffect } from "react";
import { useState, useRef } from "react";
import homeImageArr from "../datas/home-images";

function Slider({ path }) {
  const [left, setLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  let leftCopyForTemporary;

  let isEnableSwipe = true
  let isWindowScrolling = false;
  let timeoutId = null

  window.addEventListener('scroll',()=>{
    isWindowScrolling = true
    if(timeoutId){
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(()=>{
      isWindowScrolling = false
    },200)
  })
  const goTemporary = ()=>{
    // chịu chết
  }
  const goPrev = (e) => {
    if (isEnableSwipe === false || isWindowScrolling=== true) {
      return;
    }
    isEnableSwipe = false;
    if (currentIndex === 0) {
      isEnableSwipe = true;

      return;
    }
    let imgWidth = containerRef.current.offsetWidth;
    let leftCopy = left + imgWidth;
    setLeft(leftCopy);
    setCurrentIndex(currentIndex - 1);
  };
  const goNext = (e) => {
    if (isEnableSwipe === false || isWindowScrolling===true) {
      return;
    }
    isEnableSwipe = false;
    if (currentIndex === homeImageArr[0].length - 1) {
      isEnableSwipe = true;
      return;
    }

    let imgWidth = containerRef.current.offsetWidth;
    let leftCopy = left - imgWidth;
    setLeft(leftCopy);
    setCurrentIndex(currentIndex + 1);
  };
  let startX = 0;
  let dist = 0;
  function handleTouchStart(event) {
    if (isEnableSwipe === false) {
      return;
    }

    startX = event.touches[0].clientX;
    dist = 0;
    leftCopyForTemporary = left
  }

  useEffect(() => {
    setTimeout(() => {
      isEnableSwipe = true;
    }, 100);
  }, [left]);

  function handleTouchMove(event) {
    if (isEnableSwipe === false) {
      return;
    }
    
    // if (dist !== 0) {
      //   return;
      // }
      const currentX = event.touches[0].clientX;
      dist = currentX - startX;
      goTemporary()

  }
  function handleTouchEnd() {
    if (isEnableSwipe === false) {
      return;
    }

    if (dist > 0) {
      goPrev();
    } else if (dist < 0) {
      goNext();
    }
  }
  useEffect(() => {
    sliderRef.current.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    sliderRef.current.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });
    sliderRef.current.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });
  });



  return (
    <div className="SLIDER_CONTAINER   relative  " ref={sliderRef}>
      <button
        className="PREV_BTN absolute  bg-white w-8 h-8 rounded-full pl-c2 left-2 y-center"
        onClick={(e) => {
          goPrev(e);
        }}
      >
        <i
          class="fa-solid fa-angle-left"
          style={{ color: "#878787", marginRight: "2px" }}
        ></i>
      </button>

      <div className="DOTS_CONTAINTER dots-container absolute bottom-c10 x-center flex flex-col justify-end">
        <div className={`flex gap-c6   justify-center `}>
          {homeImageArr[0].map((item, index) => {
            return (
              <div
                className={`w-c6 h-c6  rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-unknown"
                } `}
              ></div>
            );
          })}
        </div>
      </div>

      <button
        className="NEXT_BTN absolute  bg-white w-8 h-8 rounded-full  right-c8 y-center"
        onClick={(e) => {
          goNext(e);
        }}
      >
        <i
          class="fa-solid fa-angle-right"
          style={{ color: "#878787", marginLeft: "2px" }}
        ></i>
      </button>

      <div
        className="IMGS_CONTAINTER     flex      w-full transition-margin "
        ref={containerRef}
        style={{ marginLeft: `${left}px` }}
      >
        {homeImageArr[0].map((item, index) => {
          return (
            <img
              src={item}
              id={index}
              className="   h-calc-vw48  m-0 max-w-full max-h-full  "
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
