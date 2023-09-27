import {useState,useEffect} from 'react'

export function useListenScrollTop0 (){
    const [isScrollTop0, setIsScrollTop0] = useState(true);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
          setIsScrollTop0(true);
        } else {
          setIsScrollTop0(false);
        }
      });
    });
    return isScrollTop0
}