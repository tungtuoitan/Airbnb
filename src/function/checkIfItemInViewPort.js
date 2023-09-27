export const isElementInViewport = (element) => {
  var rect = element.getBoundingClientRect();

  const x =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  return x;
};
