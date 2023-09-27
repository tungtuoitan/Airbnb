import { useDispatch, useSelector } from "react-redux";
import { truncateText } from "../function/makeTextShorter";
import { useState, useEffect } from "react";


export default function CheckOutPart() {
  const [isSmalller850, setIsSmaller850] = useState(true);
  const lastDate = useSelector((s) => s.dateItemSlice.lastDate);
  let date;
  if (lastDate.length === 0) {
    date = "Add date";
  } else {
    date = lastDate[0] + "/" + lastDate[1] + "/" + lastDate[2];
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 850) {
        setIsSmaller850(true);
      } else {
        setIsSmaller850(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="border-r-c1 border-solid border-gray-300
    px-c12 pt-c8 pb-c12"
    >
      <div className="text-left text-black222 text-c9 font-extrabold mb-c-1">
        'CHECK-OUT'
      </div>
      <div className="text-left text-gray-500 text-c14 text-light ">{isSmalller850 ? truncateText(date, 8) : date}</div>
    </div>
  );
}
