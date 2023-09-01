import useResizeForGraph from "./useResizeForGraph";
import GraphColItem from "./graphColItem";

export default function Graph() {
  const { height, ulRef } = useResizeForGraph();

  return (
    <div className=" px-4 mt-6  ">
      <ul
        className="relative flex gap-c1 bg-white || w-full  
    || border-b-c1 border-solid border-black222 
    || overflow-hidden "
        style={{ height: `${height / 4.5}px` }}
        ref={ulRef}
      >
        {<GraphColItem height={height}/>}
      </ul>
    </div>
  );
}
