import { useDispatch } from "react-redux";

export default function XBtnB() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
  };

  return (
    <button
      className=" rounded-lg
    py-c12 font-bold text-white text-sm color-pink-main px-6 whitespace-nowrap
    flex items-center"
      onClick={handleOnClick}
    >
       Check availability 
    </button>
  );
}
