const isMobile = navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)

export const  checkIsLaptop=()=>{
    if (isMobile && window.innerWidth<950 ) {
         return false
      } else {
         return true
      }
}
