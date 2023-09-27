let timeoutId = null

  let listenWindowScroll = (x)=>{
    window.addEventListener("scroll", () => {
      console.log('bat dau scroll')
        x[0]= true

        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          x[0] = false
          console.log('het scroll',x[0])
        }, 200);
      });

  }
  export default listenWindowScroll