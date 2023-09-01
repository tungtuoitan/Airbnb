import { useDispatch, useSelector } from "react-redux";

export default function GraphCol({height}) {
  const homeByPrice = useSelector((state) => state.filterSlice.homeByPrice);
  return (
    <>
      {homeByPrice.map((item, index) => {
        const width = `calc( 100% / ${homeByPrice.length} )`;
        const top = `${((item / 80) * height) / 4.5}px`;
        const style = {
          width: width,
          background: "#222",
          height: "100%",
          position: "relative",
          top: top,
        };
        return <li key={index} style={style}></li>;
      })}
    </>
  );
}
