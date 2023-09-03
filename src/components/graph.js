import useResizeForGraph from "./useResizeForGraph";
import GraphColItem from "./graphColItem";
import { useDispatch,useSelector } from "react-redux";
import LeftLayer from "./leftLayer";
import RightLayer from "./rightLayer";

export default function Graph() {
  const ulRef  = useResizeForGraph();
  const graphHeight = useSelector(state=>state.filterSlice.graphHeight)

  return (
    <div className=" px-4 mt-6 overflow-hidden  relative " >
      <ul
        className="relative flex gap-c1 bg-white || w-full  
    || border-b-c1 7:border-b-c2 border-solid border-black222 
    || overflow-hidden "
        style={{ height: `${graphHeight }px` }}
        ref={ulRef}
      >
        {<GraphColItem height={(graphHeight)} />}
      </ul>
      {/* <LeftLayer/>
      <RightLayer/> */}
      
    </div>
  );
}
