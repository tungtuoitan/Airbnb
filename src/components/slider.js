import { useEffect } from "react";
import { useState, useRef } from "react";
import homeImageArr from "../datas/home-images";
import PrevButton from "./prev-button";
import NextButton from "./next-button";
import DotsSlide from "./dots-slide";
import { useContext } from "react";
import { IndexContext } from "../context/indexContext";
import { homeList } from "../datas/homeListOriginal";
import { ImgContainer } from "./imgContainer";
// cái tội k dùng thư viện

function Slider() {
  // #khởi tạo
  const i = useContext(IndexContext);
  const imgArr = homeList[i].imgarr;

  const [left, setLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  let [isPrevBtnDisplay, setIsPrevBtnDisplay] = useState(false);
  let [isNextBtnDisplay, setIsNextBtnDisplay] = useState(true);

  // #use effect
  useEffect(() => {
    if (currentIndex === 0) {
      setIsPrevBtnDisplay(false);
    } else {
      setIsPrevBtnDisplay(true);
    }
    if (currentIndex === imgArr.length - 1) {
      setIsNextBtnDisplay(false);
    } else {
      setIsNextBtnDisplay(true);
    }
  }, [currentIndex]);
  let onMouseEnter = () => {
    setIsHovering(true);
  };
  let onMouseLeave = () => {
    setIsHovering(false);
  };

  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  let isEnableSwipe = true;
  let isWindowScrolling = [false];

  let timeoutId = null;
  window.addEventListener("scroll", () => {
    isWindowScrolling[0] = true;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      isWindowScrolling[0] = false;
    }, 200);
  });

  const goPrev = (e) => {
    e.preventDefault()
    if (isEnableSwipe === false || isWindowScrolling[0] === true) {
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
    e.preventDefault()
    if (isEnableSwipe === false || isWindowScrolling[0] === true) {
      return;
    }
    isEnableSwipe = false;
    if (currentIndex === imgArr.length - 1) {
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
    goTemporary();
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
    <div
      className="SLIDER_CONTAINER   relative h-full    "
      ref={sliderRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <PrevButton
        onClick={(e) => {
          goPrev(e);
        }}
        isHovering={isHovering}
        isPrevBtnDisplay={isPrevBtnDisplay}
      />
      <DotsSlide imgArr={homeImageArr} currentIndex={currentIndex} />
      <NextButton
        onClick={(e) => {
          goNext(e);
        }}
        isHovering={isHovering}
        isNextBtnDisplay={isNextBtnDisplay}
      />

      <ImgContainer ref={containerRef} imgArr={imgArr} left={left} />
    </div>
  );
}

export default Slider;
