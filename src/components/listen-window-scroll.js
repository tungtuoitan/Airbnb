let timeoutId = null;

let listenWindowScroll = (x) => {
  window.addEventListener("scroll", () => {
    x[0] = true;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      x[0] = false;
    }, 200);
  });
};
export default listenWindowScroll;
