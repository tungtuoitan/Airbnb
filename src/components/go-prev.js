const goPrev = (e) => {
    if (isEnableSwipe === false || isWindowScrolling === true) {
      return;
    }
    isEnableSwipe = false;
    if (currentIndex === 0) {
      isEnableSwipe = true;

      return;
    }}