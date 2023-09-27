import IconU2 from "./iconU2";
import { useDispatch } from "react-redux";
import { setIsAmenlitiesOn } from "../reducer/roomsSlice";
const tw = {
  container: `HEADER sticky top-0 zmax3 ||    h-12 7:h-16 || border-b-c1 border-solid 
  border-lgray || flex justify-center items-center bg-white `,
  div1: ` absolute || left-4 w-c32 h-c32 || flex justify-center 
  items-center || text-black222 cursor-pointer hover:bg-gray-200 rounded-full`,
  span1: `text-base weight-800`,
};

export default function AmenlityHeader() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsAmenlitiesOn());
  };

  return (
    <div className={tw.container}>
      <div className={tw.div1} onClick={handleOnClick}>
        <IconU2 />
      </div>
      <span className={tw.span1}></span>
    </div>
  );
}
