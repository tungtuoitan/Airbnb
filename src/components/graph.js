import useResizeForGraph from '../hooks/useResizeForGraph'
import GraphColItem from "./graphColItem";
import { useSelector } from "react-redux";

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
      
    </div>
  );
}
