import { useDispatch, useSelector } from "react-redux";

export default function GraphCol({height}) {
  const homeAmountByPrice = useSelector((state) => state.filterSlice.homeAmountByPrice);
  return (
    <>
      {homeAmountByPrice.map((item, index) => {
        const width = `calc( 100% / ${homeAmountByPrice.length} )`;
        const top = `${((item / 80) * height)}px`;
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
