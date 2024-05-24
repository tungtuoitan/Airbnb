import { useDispatch, useSelector } from "react-redux";

export default function DestinationImg({imgSrc,name}) {
  
  const where = useSelector((state) => state.root.where);
  return (
    <img
      src={imgSrc}
      className={`w-c122 h-c122 rounded-lg hover:border-2 hover:border-solid hover:border-gray-600
    ${
      where === name
        ? "border-2 border-solid border-gray-600"
        : "border-1 border-solid border-gray-300"
    } 
    `}
    />
  );
}
