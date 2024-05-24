import ArrowLeft from "./arrowLeft";

const tw = {
  container: `HEADER relative    h-16  border-b-c1 border-solid 
  border-lgray flex justify-center items-center`,
  div1: `absolute || left-4 w-c32 h-c32 || flex justify-center 
  items-center || text-black222 cursor-pointer hover:bg-gray-200 rounded-full`,
  span1: `text-base weight-800`,
};

export default function HeaderPopUp({title,handleOnClick}) {
  
  return (
    <div className={tw.container}>
      <div className={tw.div1} onClick={handleOnClick}>
        <ArrowLeft />
      </div>
      <span className={tw.span1}>{title}</span>
    </div>
  );
}
